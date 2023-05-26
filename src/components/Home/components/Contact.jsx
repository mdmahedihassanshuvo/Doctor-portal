import React from 'react';
import time from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Contact = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mx-2 lg:mx-5 mb-4 lg:mb-32'>
            <div className='p-5 text-white rounded-lg bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]'>
                <img className='mx-auto mb-3' src={time} alt="" />
                <div>
                    <p className='text-center'>Opening Hours</p>
                    <p className='text-center'>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            <div className='p-5 text-white rounded-lg bg-[#3A4256]'>
                <img className='mx-auto mb-3' src={marker} alt="" />
                <div>
                    <p className='text-center'>Visit our location</p>
                    <p className='text-center'>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div className='p-5 text-white rounded-lg bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]'>
                <img className='mx-auto mb-3' src={phone} alt="" />
                <div>
                    <p className='text-center'>Contact us now</p>
                    <p className='text-center'>+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;