import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

import "./Login.css";

const Login = () => {
    return (
        <Card className="card-top">
            <Card.Header className="text-center">Login to your account</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
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