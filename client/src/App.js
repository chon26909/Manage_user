import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import Error404 from './Error404';
import RegisterPage from './RegisterForm';
import LoginPage from './LoginForm';

const App = () => {

  return (
    <BrowserRouter>
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
              <li className="nav-item" id="4"><NavLink className="nav-link" to="/login" activeClassName="active-menu-navbar navbar-right">Login</NavLink></li>
              <li className="nav-item" id="5"><NavLink className="nav-link" to="/register" activeClassName="active-menu-navbar navbar-right">Register</NavLink></li>
            </ul>
          </div>
        </nav>
        

        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/post" component={Post} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route component={Error404}/>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
};

export default App;
