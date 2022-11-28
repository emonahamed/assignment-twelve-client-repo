import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const ManageProducts = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    const { user } = useContext(AuthContext);
    const handleAdvertise = book => {
        console.log(book)

        fetch(`https://assignment-twelve-server-theta.vercel.app/update/${book._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })
    }



    const url = `https://assignment-twelve-server-theta.vercel.app/products?email=${user?.email}`;

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteProduct = book => {
        fetch(`https://assignment-twelve-server-theta.vercel.app/products/${book._id}`, {
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
                            <th>price</th>
                            <th>Action</th>
                            <th>Status</th>
                            <th>Advertisement</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((book, i) => <tr key={book._id}>
                                <th>{i + 1}</th>
                                <td>{book.name}</td>
                                <td>{book.resalePrice}</td>
                                <td><button onClick={() => handleDeleteProduct(book)} className='btn btn-sm'>Delete</button></td>
                                <td><button className='btn btn-sm btn-outline btn-primary'>

                                    {
                                        book.isBooked === true ? <p>sold</p>
                                            :
                                            <p>available</p>

                                    }

                                </button></td>
                                <td><button className='btn btn-sm btn-outline btn-success'>

                                    {
                                        book.isBooked === true ? <p>sold</p>
                                            :
                                            book.isAdvertise === true ? <p>Advertised</p>
                                                :
                                                <button onClick={() => handleAdvertise(book)}>Advertise</button>

                                    }

                                </button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;