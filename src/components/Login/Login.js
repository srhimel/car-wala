import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { googleSignIn } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirectUrl = location.state?.from || '/';
    const handleLogin = () => {
        googleSignIn()
            .then(result => {
                history.push(redirectUrl);
            })
            .catch(error => {
                return;
            })
    }
    return (
        <div>
            <Container>
                <Button onClick={handleLogin}> Login</Button>
            </Container>
        </div>
    );
};

export default Login;