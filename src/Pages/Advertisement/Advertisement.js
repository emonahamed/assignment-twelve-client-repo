import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import AdvertisedCard from '../AdvertisedCard/AdvertisedCard';

const Advertisement = () => {
    const [advertisedItems, setAdvertisedItems] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-twelve-server-theta.vercel.app/advertise`)
            .then(res => res.json())
            .then(data => setAdvertisedItems(data));
    }, [])

    return (
        <div>
            {
                advertisedItems ? <p>
                    <div className="divider">....</div>
                    <p className='text-xl text-orange-300 text-center'>  Advertise Items</p>
                    <div className="divider">...</div>
                </p> : <></>
            }

            <div className=' grid gap-3 my-2 justify-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                {
                    advertisedItems?.map(advertise =>
                        <AdvertisedCard key={advertise._id}
                            advertise={advertise}
                        >
                        </AdvertisedCard>)
                }
            </div>

        </div>
    );
};

export default Advertisement;