import React from 'react';
import './Banner.css'
import banner from '../../../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div className="banner mx-2 lg:mx-0 lg:mb-10">
            <div className='flex flex-col-reverse lg:flex-row lg:py-32 lg:px-20 justify-center items-center gap-4 mx-auto'>
                <div className='lg:w-1/2 space-y-3'>
                    <h2 className='text-5xl'>Your New Smile Starts Here</h2>
                    <p className='text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className='btn btn-accent'>GET STARTED</button>
                </div>
                <div className='lg:w-1/2'>
                    <img src={banner} className='lg:w-3/4' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;