import React, { useContext, useEffect, useState } from 'react';
import ChecklistRow from '../ChecklistRow/ChecklistRow';
import { AuthContext } from '../../../Provider/AuthProvider';
import moment from 'moment';

const Checklist = () => {

    const [appointments, setAppointments] = useState([]);
    const { loading } = useContext(AuthContext)

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => {
                setAppointments(data);
            })
    }, [loading])

    console.log(appointments)

    return (
        <div className='min-h-screen lg:mx-20 lg:p-5'>
            <div className="overflow-x-auto">
                <div className='flex justify-between items-center lg:mb-6'>
                    <h2 className='text-3xl font-semibold'>My Appointment</h2>
                    <p className='font-medium p-2 border border-black rounded-xl'>{moment().format("MMM D, YYYY")}</p>
                </div>
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            appointments.map((appointment, index) => <ChecklistRow
                                key={appointment._id}
                                appointment={appointment}
                                index={index}
                            ></ChecklistRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Checklist;