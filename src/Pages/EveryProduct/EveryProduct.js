import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const EveryProduct = ({ category, setCardDetails }) => {
    // console.log(category);




    const { category: ProductName, location, name, originalPrice, postedDate, resalePrice, sellerName, status, yearsOfUse, picture } = category;
    // console.log(ProductName, location, name, originalPrice, postedDate, resalePrice, sellerName, status, yearsOfUse)
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={picture} alt="img" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl font-bold">Product Information</h1>
                    <p className="py-1 text=xl"> <span className='text-orange-600'>Product Name: </span>{name}</p>
                    <p className="py-1 text=xl"> <span className='text-orange-600'>location: </span>{location}</p>
                    <p className="py-1 text=xl"> <span className='text-orange-600'>Original Price : </span>{originalPrice}</p>
                    <p className="py-1 text=xl"> <span className='text-orange-600'> Resale Price : </span>{resalePrice}</p>
                    <p className="py-1 text=xl"> <span className='text-orange-600'>Seller Name : </span>{sellerName}</p>
                    <p className="py-1 text=xl"> <span className='text-orange-600'>Years Of Use : </span>{yearsOfUse}</p>
                    <label

                        onClick={() => setCardDetails(category)}
                        htmlFor="my-modal-3" className="btn">Booking Now</label>
                    {/* <BookingModal category={category}></BookingModal> */}
                </div>
            </div>
        </div>

    );
};

export default EveryProduct;