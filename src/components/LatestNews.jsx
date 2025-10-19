import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-4 py-2'>Latest</p>
            <Marquee className='' pauseOnHover={true} speed={60}>
                <p className='font-bold mr-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, accusantium? </p>
                <p className='font-bold mr-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, accusantium? </p>
                <p className='font-bold mr-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, accusantium? </p>

            </Marquee>
        </div>
    );
};

export default LatestNews;