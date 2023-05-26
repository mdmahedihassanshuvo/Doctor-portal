import React from 'react';
import img from '../../../assets/images/treatment.png'

const Blog = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center lg:gap-24 items-center lg:ms-[217px] lg:me-[166px] lg:mb-40'>
            <div className='lg:w-1/2 '>
                <img className='lg:w-[458px] lg:h-[576px] rounded-lg mx-auto' src={img} alt="" />
            </div>
            <div className='lg:w-1/2 space-y-6'>
                <h2 className='text-5xl'>Exceptional Dental Care, on Your Terms</h2>
                <p className='text-base'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web pageing and typesetting industry. Lorem Ipsum has been the It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className='btn btn-accent'>GET STARTED</button>
            </div>
        </div>
    );
};

export default Blog;