import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const ManageProducts = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/products?email=${user?.email}`;

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
            <p>manage products</p>
        </div>
    );
};

export default ManageProducts;