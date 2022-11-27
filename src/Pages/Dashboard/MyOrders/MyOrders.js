import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })


    return (
        <div>
            <h3 className="text-3xl">My orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full mb-5">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>price</th>
                            <th>Phone number</th>
                            <th>Meeting Place</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            bookings?.map((booking, i) => <tr
                                key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.productName}</td>
                                <td>{booking.price}</td>
                                <td>{booking.phoneNumber}</td>
                                <td>{booking.meetingPlace}</td>
                                <button className='btn btn-sm'>pay</button>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;