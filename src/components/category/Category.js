import React, { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table'

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

            <h3>Category list</h3>

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
                    <td>Edit | Delete</td>
                   </tr>
                    
                    )}
          
                </tbody>
            </Table>

        </div>
    );
};

export default Category;