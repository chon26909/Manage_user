import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import Error404 from './Error404';
import LoginForm from './LoginForm';


const App = () => {

  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/post" activeClassName="active-menu-navbar">Post</NavLink></li>
          <li><NavLink to="/profile" activeClassName="active-menu-navbar">Profile</NavLink></li>
          <li><NavLink to="/login" activeClassName="active-menu-navbar">Login</NavLink></li>
        </ul>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/post" component={Post} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={LoginForm} />
          <Route component={Error404}/>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
};

export default App;
