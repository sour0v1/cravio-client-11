import React from 'react';
import Marquee from 'react-fast-marquee';
import image1 from '../../assets/huston-food-bank.gif'
import image2 from '../../assets/north-texus.png'
import image3 from '../../assets/fare-share.png'
import image4 from '../../assets/vancouver.png'
import image5 from '../../assets/give-well.png'
import image6 from '../../assets/food-hungry.png'

const FeaturedPartners = () => {
    return (
        <div className='mb-12 max-w-6xl mx-auto'>
            <h2 className='text-center text-2xl font-bold my-6'>Featured Food Supporters</h2>

            <Marquee className='flex justify-center items-center gap-6 my-9'>
                <div className='mx-6'>
                    <img className='w-60 mx-6' src={image1} alt="" />
                </div>
                <div className='mx-6'>
                    <img className='w-60 mx-6' src={image2} alt="" />
                </div>
                <div className='mx-6'>
                    <img className='w-60 mx-6' src={image3} alt="" />
                </div>
                <div className='mx-6'>
                    <img className='w-60 mx-6' src={image4} alt="" />
                </div>
                <div className='mx-6'>
                    <img className='w-60 mx-6' src={image5} alt="" />
                </div>
                <div className='mx-6'>
                    <img className='w-60 mx-6' src={image6} alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default FeaturedPartners;