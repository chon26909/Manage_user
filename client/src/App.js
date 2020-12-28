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
import Navbar from './navbar';
import Login from './LoginForm1';

const App = () => {

  return (
    <BrowserRouter>
      <div>
        
        <Navbar />
        {/* <Login /> */}
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
