import React, { useState } from 'react';

import { Card, Form, Button } from 'react-bootstrap';

import "./Login.css";


async function loginUser(credentials) {
   
    //change this later as post request
   /*
    return fetch('http://localhost:3030/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())

    */

    return fetch('https://jsonblob.com/api/593d571f-a4da-11eb-acf4-9b6752717560', {
        method: 'GET'
    })
        .then(data => data.json())
}


const Login = ({ setToken }) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password
        });
        setToken(token);
    }

    return (
        <Card className="card-top">
            <Card.Header className="text-center">Login to your account</Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                   </Button>
                </Form>
            </Card.Body>

        </Card>

    );
};

export default Login;