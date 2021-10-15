import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center">
            <h1>404! </h1>
            <Button> <Link to="/" className=" text-light"> Go Back to Home</Link> </Button>
        </div>
    );
};

export default NotFound;