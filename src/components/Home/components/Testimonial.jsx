import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'

const Testimonial = () => {
    return (
        <div className='lg:mb-36'>
            <div className='lg:ms-14'>
                <p className='text-[#19D3AE] text-lg font-semibold lg:mb-2'>Testimonial</p>
                <p className='text-4xl lg:mb-36'>What Our Patients Says</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:mx-20 mb-4 lg:mb-10'>
                <div className='p-5 rounded-lg shadow-xl'>
                    <div className='space-y-2'>
                        <p className='text-start mb-2'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    </div>
                    <div className='flex justify-start items-center gap-5 mx-auto mb-3'>
                        <img className='border-2 border-cyan-400 rounded-full' src={people1} alt="" />
                        <div>
                            <p className='font-semibold'>Winson Herry</p>
                            <p>California</p>
                        </div>
                    </div>
                </div>
                <div className='p-5 rounded-lg shadow-xl'>
                    <div className='space-y-2'>
                        <p className='text-start mb-2'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    </div>
                    <div className='flex justify-start items-center gap-5 mx-auto mb-3'>
                        <img className='border-2 border-cyan-400 rounded-full' src={people2} alt="" />
                        <div>
                            <p className='font-semibold'>Winson Herry</p>
                            <p>California</p>
                        </div>
                    </div>
                </div>
                <div className='p-5 rounded-lg shadow-xl'>
                    <div className='space-y-2'>
                        <p className='text-start mb-2'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    </div>
                    <div className='flex justify-start items-center gap-5 mx-auto mb-3'>
                        <img className='border-2 border-cyan-400 rounded-full' src={people3} alt="" />
                        <div>
                            <p className='font-semibold'>Winson Herry</p>
                            <p>California</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;