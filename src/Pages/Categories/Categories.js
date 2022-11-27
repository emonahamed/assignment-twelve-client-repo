import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from '../CategoryCard/CategoryCard';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/categories`)
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);
    // console.log(categories);

    return (
        <div>
            <div className="divider">...</div>
            <p className='text-center'>Categories</p>
            <div className="divider">...</div>
            <div className=' grid gap-4 my-2 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ' >
                {
                    categories.map(category => <CategoryCard key={category._id}
                        category={category}

                    ></CategoryCard>)
                }


            </div>
        </div>
    );
};

export default Categories;