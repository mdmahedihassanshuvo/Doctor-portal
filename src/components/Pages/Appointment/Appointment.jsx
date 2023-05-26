import React from 'react';
import './Appointment.css'
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../assets/images/calender.json";
import Services from './components/Services';
import banner from '../../../assets/images/banner.jpg'

const Appointment = () => {
    return (
        <>
            <div className="appointment mx-2 lg:mx-0 lg:mb-10">
                <div className='flex flex-col lg:flex-row lg:py-32 lg:px-20 justify-center items-center gap-4 mx-auto'>
                    <div className='lg:w-2/6 mx-5 lg:mx-0'>
                        <Lottie animationData={groovyWalkAnimation} loop={true} />;
                    </div>
                    <div className='lg:w-1/2 mx-auto'>
                        <img src={banner} className='lg:w-full' alt="" />
                    </div>
                </div>
            </div>
            <Services></Services>
        </>
    );
};

export default Appointment;