import moment from 'moment/moment';
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ItemCard = ({ item, handleModal, serviceData }) => {
    // console.log(item)

    const { _id, name, time } = item;

    const handleForm = event => {
        event.preventDefault();
        const form = event.target;
        const date = form.date.value;
        const time = form.time.value;
        const clientName = form.client.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const client = {
            date,
            time,
            clientName,
            phone,
            email,
            service: name,
        }
        // console.log(client)
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(client)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Appointments added',
                    showConfirmButton: false,
                    timer: 1500
                })
                form.reset()
            })

    }

    return (
        <div className='shadow-xl font-semibold lg:py-10 rounded-md text-center'>
            <p className='text-lg font-semibold lg:mb-2'>{name}</p>
            <p className='lg:mb-5'>{time}</p>
            {/* <Link></Link> */}
            <label htmlFor="my-modal-3" onClick={() => handleModal(_id)} className='btn btn-accent text-white'>Book Appointment</label>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleForm}>
                        <h1 className='text-start text-xl font-bold mb-9'>{serviceData?.name}</h1>
                        <input className='border w-full p-2 mb-3 rounded' type="text" name='date' defaultValue={moment().format("MMM Do YYYY")} /><br />
                        <input required className='border w-full p-2 mb-3 rounded' type="text" name='time' defaultValue={serviceData?.time} /><br />
                        <input required className='border w-full p-2 mb-3 rounded' type="name" name='client' placeholder='Enter Name' /><br />
                        <input required className='border w-full p-2 mb-3 rounded' type="number" name='phone' placeholder='Enter Phone Number' /><br />
                        <input required className='border w-full p-2 mb-3 rounded' type="email" name='email' placeholder='Enter Email' /><br />
                        <input className="btn btn-block" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;