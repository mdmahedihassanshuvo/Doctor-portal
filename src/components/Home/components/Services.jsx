import React from 'react';
import teeth1 from '../../../assets/images/fluoride.png'
import teeth2 from '../../../assets/images/cavity.png'
import teeth3 from '../../../assets/images/whitening.png'

const Services = () => {
    return (
        <div className='lg:mb-36'>
            <h2 className='text-lg font-semibold text-center mb-2'>OUR SERVICES</h2>
            <p className='text-4xl text-center mb-3 lg:mb-16'>Services We Provide</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mx-2 lg:mx-5 mb-4 lg:mb-10'>
                <div className='p-5 rounded-lg shadow-xl'>
                    <img className='mx-auto mb-3' src={teeth1} alt="" />
                    <div className='space-y-2'>
                        <p className='text-center font-medium'>Fluoride Treatment</p>
                        <p className='text-center'>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>
                <div className='p-5 rounded-lg shadow-xl'>
                    <img className='mx-auto mb-3' src={teeth2} alt="" />
                    <div className='space-y-2'>
                        <p className='text-center font-medium'>Cavity Filling</p>
                        <p className='text-center'>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>
                <div className='p-5 rounded-lg shadow-xl'>
                    <img className='mx-auto mb-3' src={teeth3} alt="" />
                    <div className='space-y-2'>
                        <p className='text-center font-medium'>Teeth Whitening</p>
                        <p className='text-center'>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;