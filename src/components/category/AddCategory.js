import React, { useState } from 'react';

import { Card, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const AddCategory = () => {

    const [title, setTitle] = useState("");

    const [titleErr, setTitleErr] = useState({});

    const handleSubmit = async e => {
        e.preventDefault();

        const isValid = formValidation();

        console.log("isValid:"+isValid);
       
       if(isValid) {

        //call api
        setTitle("");
    
       }

    }

    const formValidation = () => {

        const titleErr = {};

        let isValidHere = true;

        if(title.length < 2) {
            titleErr.titleErrShort = "Category title is too short!";
            isValidHere = false;
        }

        setTitleErr(titleErr);

        return isValidHere;
    }

    return (
        <div>

            <Card className="mt-4">
                <Card.Body>
                    <Card.Title>Add New Category</Card.Title>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" name="title" onChange={e => setTitle(e.target.value)} />
                            <Form.Text className="text-muted">
                               {Object.keys(titleErr).map((key) => {
                                   return <div className="text-danger"> {titleErr[key]}</div>
                               })}
                            </Form.Text>

                        </Form.Group>

                        <Button variant="outline-primary" type="submit">Save</Button>
                        <Link to="/category">
                        <Button className="ml-2" variant="outline-danger">Cancel</Button>
                       </Link> 
                      
                    </Form>


                </Card.Body>
            </Card>

        </div>
    );
};

export default AddCategory;