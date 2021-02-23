import React, { useState, useEffect } from 'react';
import UserPage from './UserList';
import Dropdown from 'react-bootstrap/Dropdown';
const Home = (props) => {

    return (
        <div className="App container">
            <UserPage />
        </div>
    )
}

export default Home;