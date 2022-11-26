import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const category = form.category.value;
        const location = form.location.value;
        const resalePrice = form.resaleprice.value;
        const originalPrice = form.originialprice.value;
        const yearsOfUse = form.yearofuse.value;
        const postedDate = new Date().toLocaleString();
        const sellerName = form.username.value;
        const condition = form.condition.value;
        const name = form.productname.value;
        const phoneNumber = form.phonenumber.value;
        const description = form.description.value;
        const yearofpurchase = form.yearofpurchase.value;
        const email = form.useremail.value;


        const image = form.image.files[0];
        const formData = new FormData();
        formData.append('image', image)


        const url = "https://api.imgbb.com/1/upload?key=e7a04047f57dcbfd5c3266a994ede1d5";


        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const booking = {
                        category: category,
                        picture: imgData.data.url,
                        location: location,
                        resalePrice: resalePrice,
                        originalPrice: originalPrice,
                        yearsOfUse: yearsOfUse,
                        postedDate: postedDate,
                        sellerName: sellerName,
                        name: name,
                        condition: condition,
                        phoneNumber: phoneNumber,
                        description: description,
                        yearofpurchase: yearofpurchase,
                        email: email
                    }

                    console.log(booking);
                    fetch('http://localhost:5000/allproduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(booking)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged) {
                                toast('product added successfully')
                                form.reset();
                            }
                        })







                }
            })

        // console.log(image)






    }



    return (
        <div>
            <p className='text-bold text-orange-500'>Add product</p>
            <form onSubmit={handleBooking} >
                <p> Name:   <input type="text" value={user?.displayName} name='username' placeholder="Type here" className="input  w-full max-w-xs " required /></p>
                <p>  Email:   <input type="text" value={user?.email} name='useremail' placeholder="Type here" className="input  w-full max-w-xs " required /></p>
                <div>
                    <label className="label">
                        <span className="label-text">Condition</span>
                    </label>

                    <select name='condition' className=" input input-bordered required:  select w-full max-w-xs">
                        <option selected>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">category</span>
                    </label>

                    <select name='category' className=" input input-bordered required:  select w-full max-w-xs required:">
                        <option selected>iphone</option>
                        <option>samsung</option>
                        <option>oneplpus</option>
                        <option>xiaomi</option>
                    </select>
                </div>

                <p> Product Name:   <input type="text" name='productname' placeholder="Type here" className="input input-bordered w-full max-w-xs my-2" required /></p>
                <p> Phone Number :   <input type="number" name='phonenumber' placeholder="Type here" className="input input-bordered  w-full max-w-xs my-2" required /></p>
                <p>Location:   <input type="text" name='location' placeholder="Type here" className="input input-bordered  w-full max-w-xs my-2" required /></p>
                <p>Originial Price:   <input type="text" name='originialprice' placeholder="Type here" className="input input-bordered  w-full max-w-xs my-2" required /></p>
                <p>Resale Price:   <input type="text" name='resaleprice' placeholder="Type here" className="input input-bordered  w-full max-w-xs my-2" required /></p>
                <p> Description :   <input type="text" name='description' placeholder="Type here" className="input input-bordered w-full max-w-xs  my-2" required /></p>
                <p> Year Of purchase :   <input type="text" name='yearofpurchase' placeholder="Type here" className="input input-bordered w-full max-w-xs  my-2" required /></p>
                <p> Year Of Use :   <input type="text" name='yearofuse' placeholder="Type here" className="input input-bordered w-full max-w-xs  my-2" required /></p>
                <div>
                    <label htmlFor="image" className='block mb-2 text-sm'>
                        Select Image
                    </label>
                    <input required type="file" name="image" accept='image/*' id="image" />
                </div>
                <input className='max-w-s btn w-1/4 btn-outline my-5 ' type="submit" name="" id="" value="Add Product" />


            </form>

        </div>
    );
};

export default AddProduct;