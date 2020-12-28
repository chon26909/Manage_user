import React , { useState, useEffect } from 'react';
import {Link, NavLink} from 'react-router-dom';
import { auth } from './firebase/firebase';

const Navbar = () => {

    const [username , setUser] = useState(null);
    const [imgprofile, setImgProfile] = useState();

    const checkAuth = auth.onAuthStateChanged((user) => {
        if(user)
        {
            setUser(user.displayName);
        }
        else{
            setUser(null);
        }
        // setUser(imgprofile.)
        console.log(user)
    })

    useEffect(() => {
        checkAuth();
    }, [])

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-navbar mb-5">
                <div className="container">
                    <Link to="/"><span className="logo-web">Logo Page</span></Link>
                    <ul className="navbar-nav mr-auto">
                        {/* active-menu-navbar in App.css */}
                        <li className="nav-item" id="1"><NavLink className="nav-link" to="/" exact={true} activeClassName="active-menu-navbar">Home</NavLink></li>
                        <li className="nav-item" id="2"><NavLink className="nav-link" to="/post" activeClassName="active-menu-navbar">Post</NavLink></li>
                        <li className="nav-item" id="3"><NavLink className="nav-link" to="/profile" activeClassName="active-menu-navbar">Profile</NavLink></li>
                    </ul>
                    <ul className="navbar-nav">
                        <li>{username}</li>
                        <li className="nav-item" id="4"><NavLink className="nav-link" to="/login" activeClassName="active-menu-navbar navbar-right">Login</NavLink></li>
                        <li className="nav-item" id="5"><NavLink className="nav-link" to="/register" activeClassName="active-menu-navbar navbar-right">Register</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
    
}

export default Navbar;