import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ cardDetails, setCardDetails }) => {
    const { user } = useContext(AuthContext);
    console.log(user)


    console.log(cardDetails)
    const { name, resalePrice } = cardDetails;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const phoneNumber = form.phoneNumber.value;
        const meetingPlace = form.meetingPlace.value;

        console.log(price, name, email, phoneNumber, meetingPlace, productName)
        setCardDetails(null)
    }

    return (
        <>


            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">

                    <form onSubmit={handleBooking} >
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                        <p ><span className='text-lg font-bold '> Item Name :</span>  <input type="text" name='productName' value={name} placeholder="Type here" className="input input-ghost text-lg font-bold w-full max-w-xs" readOnly /></p>
                        <p className="py-4"></p>

                        <p> Buyer Name: <input type="text" name='name' value={user?.displayName} placeholder="Type here" className="input input-ghost w-full max-w-xs" readOnly /></p>
                        <p> email : <input type="text" name='email' value={user?.email} placeholder="Type here" className="input input-ghost w-full max-w-xs" readOnly /></p>
                        <p> price: <input type="text" name='price' value={resalePrice} placeholder="Type here" className="input input-ghost w-full max-w-xs" readOnly /></p>
                        <p> Phone Number :   <input type="number" name='phoneNumber' placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs my-2" required /></p>
                        <p> Meeting Place :   <input type="text" name='meetingPlace' placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs  my-2" required /></p>
                        <input className='w-full max-w-s btn btn-outline my-5 ' type="submit" name="" id="" value="Submit" />

                    </form>

                </div>
            </div>



        </>
    );
};

export default BookingModal;