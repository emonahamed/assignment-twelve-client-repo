import React from 'react';

const AdvertisedCard = ({ advertise }) => {
    const { picture, name, originalPrice, resalePrice, location, yearsOfUse, condition } = advertise;
    return (



        <div className="card w-96 h-fit bg-base-100 shadow-xl">
            <div className='text-center'>
                <div className="divider">....</div>
                <p className='text-3xl text-center'>Advertised Itmes</p>
                <div className="divider">....</div>
            </div>
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl max-w-xs" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{ }</h2>
                <p><span className='text-white text-bold'>Product Name: </span>{name}</p>
                <p><span className='text-white text-bold'>OriginaL Price : </span>{originalPrice}</p>
                <p><span className='text-white text-bold'>Resale Price : </span>{resalePrice}</p>
                <p><span className='text-white text-bold'>Location : </span>{location}</p>
                <p><span className='text-white text-bold'>Years of Use: </span>{yearsOfUse}</p>
                <p><span className='text-white text-bold'>Condition : </span>{condition}</p>
                <p className='text-purple-600'>Visit This category to Buy this product</p>
            </div>
        </div>
    );
};

export default AdvertisedCard;