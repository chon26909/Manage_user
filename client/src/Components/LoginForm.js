import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SignInWithGoogle from './SignInWithGoogle';
import SignINWithFacebook from './SignInWithFacebook';
import { auth } from '../Authentication/firebase';
import SignInWithFacebook from './SignInWithFacebook';

class LoginPage extends Component {

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
        console.log(this.state);
    }

    // onLoginSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(this.state);
    // }

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
        return(
            <div className="col-lg-4 col-12 mx-auto card">
                <div className="card-body">
                    <form>
                        <h3>Login Form</h3>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control is-valid" name="email" onChange={this.onInputChange}></input>
                            {/* <div className="valid-feedback">พบชื่อผู้ใช้</div> */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control is-valid" name="password" onChange={this.onInputChange}></input>
                            {/* <div className="invalid-feedback">รหัสผ่านสั้นเกินไป</div> */}
                        </div>
                        <button type="submit" onClick={this.onLoginSubmit} className="btn btn-success">Login</button>
                    </form>
                </div>
                <div>
                    <SignInWithGoogle />
                    <SignInWithFacebook />
                </div>
                <div>
                    <span>สมัครสมาชิก</span>
                    <Link to="/register">คลิก</Link>
                </div>
            </div>
        )
    }
}

export default LoginPage;