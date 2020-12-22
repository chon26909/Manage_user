import React, {Component} from 'react';

class LoginPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            password: ''
        }
    }

    onInputChange = (event) => {
        console.log(event);
        this.setState({
            [event.target.name]:event.target.value
        })
        console.log(this.state);
    }

    render() {
        return(
            <div className="col-4 mx-auto card">
                <div className="card-body">
                    <form>
                        <h3>Login Form</h3>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" name="username" onChange={this.onInputChange}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" onChange={this.onInputChange}></input>
                        </div>
                        <button type="button" className="btn btn-success">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage;