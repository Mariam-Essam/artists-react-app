import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column mb-5">
            <img src="./notfound.png"/>
            <h5><Link to="/">go to home</Link></h5>
        </div>
    );
};


export default NotFound;