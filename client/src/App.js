import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Product from './Components/Product';
import Error404 from './Components/Error404';
import RegisterPage from './Components/RegisterForm';
import LoginPage from './Components/LoginForm';
import Navbar from './Components/navbar';
// import Login from './LoginForm1';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer/authReducer';

const App = () => {
  const store = createStore(reducer)
  return (
    <Provider store={store}>
      <BrowserRouter>

        <Navbar />

        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route component={Error404} />
        </Switch>

      </BrowserRouter>
    </Provider>

  );
};

export default App;
