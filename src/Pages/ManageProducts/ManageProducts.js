import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const ManageProducts = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)

    const { user } = useContext(AuthContext);






    const url = `http://localhost:5000/products?email=${user?.email}`;

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteDoctor = doctor => {
        fetch(`http://localhost:5000/products/${doctor._id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })
    }


    return (
        <div>
            <p>manage products</p>
            {/* <p>length{bookings?.length}</p> */}
            {/* {
                bookings?.map(book => <p>ok</p>)
            } */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>pricer</th>
                            <th>Action</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((book, i) => <tr key={book._id}>
                                <th>{i + 1}</th>
                                <td>{book.name}</td>
                                <td>{book.resalePrice}</td>
                                <td><button onClick={() => handleDeleteDoctor(book)} className='btn btn-sm'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;