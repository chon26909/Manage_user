import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebase/firebase';

class LoginPagebyLilly extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            email: '',
            password: '',
            currentUser: null,
            message: ''
        }
    }

    onInputChange = (event) => {
        console.log(event);
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    onLoginSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    
        auth
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(response => {
            this.setState({
                currentUser: response.user
            })
        })
        .catch(error => {
            this.setState({
                message: error.message
            })
        })
    }
    render() {
        if (this.state.currentUser){
            return (
                <div>
                  <p>Hello {this.state.currentUser.email}</p>
                  <button onClick={this.logout}>Logout</button>
                </div>
              )
        }

        return(
            <div className="col-4 mx-auto card">
                <div className="card-body">
                    <form>
                        <h3>Login Form</h3>
                        <div className="form-group">
                            <label htmlFor="username">Email</label>
                            <input type="email" className="form-control is-valid" name="email" onChange={this.onInputChange}></input>
                            <div className="valid-feedback">พบชื่อผู้ใช้</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control is-invalid" name="password" onChange={this.onInputChange}></input>
                            <div className="invalid-feedback">รหัสผ่านสั้นเกินไป</div>
                        </div>
                        <button type="button" className="btn btn-success" onClick={this.onLoginSubmit}>Login</button>
                    </form>
                </div>
                <div>
                    <span>สมัครสมาชิก</span>
                    <Link to="/register">คลิก</Link>
                </div>
            </div>
        )
    }
}

export default LoginPagebyLilly;