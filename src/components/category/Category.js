import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Category = () => {

    const [category, setCategory] = useState([])

    useEffect(() => {
        axios.get('https://jsonblob.com/api/979febba-a8b1-11eb-aa02-93cd55b52c59')
            .then(res => {
                const cats = res.data;
                setCategory(cats);
            })
    },[])

    return (
        <div>

            <h3>Category list</h3>

            <ul>
                {category.map(cat => <li>{cat.title}</li>)}
            </ul>
        </div>
    );
};

export default Category;