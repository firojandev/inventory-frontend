import React, { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

import axios from 'axios';

const Category = () => {

    const [category, setCategory] = useState([])

    useEffect(() => {
        axios.get('https://jsonblob.com/api/979febba-a8b1-11eb-aa02-93cd55b52c59')
            .then(res => {
                const cats = res.data;
                setCategory(cats);
            })
    }, [])

    return (
        <div>

           
           <div className="mb-2 pb-4 pt-4">
               <div className="float-left">

                  <h3>Category List</h3> 

                </div> 
               <div className="float-right">

               <Button variant="outline-primary">New </Button>

                </div> 
           </div>


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                {category.map(cat => 
                    
                    <tr>
                    <td>{cat.id}</td>
                    <td>{cat.title}</td>
                    <td> <Button variant="outline-info">Edit</Button> <Button variant="outline-danger">Danger</Button> </td>
                   </tr>
                    
                    )}
          
                </tbody>
            </Table>

        </div>
    );
};

export default Category;