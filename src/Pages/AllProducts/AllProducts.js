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
        fetch(`https://assignment-twelve-server-theta.vercel.app/category/${categoryName.id}`)
            .then(res => res.json())
            .then(data => setcategoryProduct(data));
    }, [cardDetails])
    console.log(categoryProduct);



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