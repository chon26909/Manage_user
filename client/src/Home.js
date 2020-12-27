import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Home = () => {
    const [dataState, setDataState] = useState({ count: 0 });

    const plus = () => {
        setDataState({
            count: dataState.count + 1
        });
    }

    const minnus = () => {
        setDataState({
            count: dataState.count - 1
        });
    }

    const [userList, setUserList] = useState([]);

    function fetchUserData() {
        Axios.get("http://localhost:3001/api/user").then((Response) => {
            setUserList(Response.data);
        })  
    }

    useEffect(() => {
        fetchUserData();
    }, [] );

    return (
        <div className="App container">
            <div>
                {userList.map((val, key) => (
                    <div className="">
                        <p>No: {key}</p>
                        <p>ID: {val.id}  </p>
                        <p>Firstname : {val.firstname}</p>
                        <p>Lastname : {val.lastname}</p>
                        <hr></hr>
                    </div>
                ))}
            </div>

            <h1>Product</h1>
            <div className="card m-5">
                <div className="card-header">
                    <h3>Bossza in bottle</h3>
                </div>
                <div className="card-body">
                    <h1>{dataState.count}</h1>
                </div>
                <div className="card-footer">
                    <span><button className="btn btn-success" onClick={plus}>เพิ่ม</button></span>
                    <span><button className="btn btn-danger" onClick={minnus}>ลด</button></span>
                </div>
            </div>


            
        </div>
    )
}

export default Home;