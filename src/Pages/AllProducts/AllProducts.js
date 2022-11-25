import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EveryProduct from '../EveryProduct/EveryProduct';

const AllProducts = () => {
    const [categoryProduct, setcategoryProduct] = useState([]);

    const categoryName = useParams();
    console.log(categoryName.id);

    useEffect(() => {
        fetch(`http://localhost:5000/category/${categoryName.id}`)
            .then(res => res.json())
            .then(data => setcategoryProduct(data));
    }, [])
    console.log(categoryProduct)



    return (
        <div>
            {
                categoryProduct.map(category => <EveryProduct
                    category={category}

                ></EveryProduct>)
            }
        </div>
    );
};

export default AllProducts;