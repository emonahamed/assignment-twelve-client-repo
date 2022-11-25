import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import EveryProduct from '../EveryProduct/EveryProduct';

const AllProducts = () => {
    const [categoryProduct, setcategoryProduct] = useState([]);
    const [cardDetails, setCardDetails] = useState(null);

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
            <section>
                {
                    categoryProduct.map(category => <EveryProduct
                        category={category}
                        setCardDetails={setCardDetails}

                    ></EveryProduct>)
                }
            </section>
            {cardDetails &&


                <BookingModal
                    cardDetails={cardDetails}
                    setCardDetails={setCardDetails}
                ></BookingModal>
            }
        </div>
    );
};

export default AllProducts;