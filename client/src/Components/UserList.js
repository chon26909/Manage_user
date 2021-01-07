import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Posts = (props) => {

    const [userList, setUserList] = useState([]);

    function fetchUserData() {
        Axios.get("http://localhost:3001/api/user").then((Response) => {
            setUserList(Response.data);
        })
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    //Add user to database 
    const [Firstname, setFirstname] = useState()
    const [Lastname, setLastname] = useState()

    function newFirstname(event) {
        // console.log(event.target.value)
        setFirstname(event.target.value)
        console.log("Object " + JSON.stringify(Firstname) + "   " + JSON.stringify(Lastname));

    }
    function newLastname(event) {
        // console.log(event.target.value);
        setLastname(event.target.value);
        console.log("Object " + JSON.stringify(Firstname) + "   " + JSON.stringify(Lastname));
    }



    function addUser() {
        Axios.post("http://localhost:3001/api/user", {
            firstname: Firstname,
            lastname: Lastname
        }).then(res => {
            // fetchUserData();
            console.log(res)
        })
    }


    //delete User 
    const deleteUser = (id) => {
        Axios.delete("http://localhost:3001/api/user/" + id).then((res) => {
            setUserList(
                userList.filter((val) => {
                    return val.id !== id;
                })
            )
        })
    }

    // const updateUser = (id) => {
    //     const dom = document.querySelector("div#n8epoV9Ar65DgzEMYxpB p.data-input");
    //     const dom1 = dom.getElementsByClassName(".data-input");
    // }

    const EditItemHandler = (editKey, data) => {
        const users = [...userList];
        const editingIndex = users.findIndex((item) => {
            return item
        })
    }

    const onEditUser = (editKey, data) => {
        // const editData = {
        //     firstname: userList.
        // }
        console.log(editKey);
        console.log(data)
    }



    // const editFrom = (
    //     <div className="row">
    //         <div className="">
    //             <input 
    //                 type="text" 
    //                 name="updateName"
    //                 className="form-control col-6"
    //                 defaultValue={data.firstname}></input>
    //                 <button 
    //                     onClick={onCancelEdit.bind()}
    //                     className="btn btn-primary col-3">ยกเลิก</button>
    //                 <button 
    //                     onClick={conConfirmEdit.bin()}
    //                     className="btn btn-success col-3">ยืนยัน</button>
    //         </div>
    //     </div>
    // )

    return (
        <div className="App">
            <form className="mb-5 card col-6 p-5">
                <h3>Add User</h3>
                <div>
                    <label htmlFor="firstname">Firstname</label>
                    <input type="text" className="form-control" onChange={newFirstname}></input>
                </div>
                <div>
                    <label htmlFor="lastname">Lastname</label>
                    <input type="text" className="form-control" onChange={newLastname}></input>
                </div>
                <div className="mt-3">
                    <button className="btn btn-success btn-block" onClick={addUser}>Add</button>
                </div>
            </form>
            <div className="row">
                {userList.map((val, key) => (
                    <div key={key} id={val.id} className="col-4 mb-4">
                        <div className="card">
                            <div className="card-header">
                                <strong>No: {key}</strong>
                                <span className="float-right">
                                    <span className="btn-edit-user" onClick={onEditUser.bind(this)}>แก้ไข</span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span className="btn-delete-user" onClick={() => deleteUser(val.id)}>ลบ</span>
                                </span>

                            </div>
                            <div className="card-body">
                                <p>ID: {val.id}  </p>
                                <p className="data-input">Firstname : {val.firstname}</p>
                                <p className="data-input">Lastname : {val.lastname}</p>
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Posts;