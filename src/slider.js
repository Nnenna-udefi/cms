import React from 'react';
import Slider from 'react-slick';
import rightPeople from './images/right-people.png';
import conservImg from './images/conservations.png';
import upToDate from './images/upToDate.png';

const FeatureSlider = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div  className='flex flex-wrap'>
            <div className='md:flex my-4'>
                <div>
                    <img src={rightPeople} alt='open to work' className='md:hidden w-1/2' />
                    <h2 className='text-red-700 text-2xl md:text-4xl my-2 font-light'>Let the right people know you’re open to work</h2>
                    <p className='md:text-4xl my-3 font-thin'>With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.</p>
                </div>
                <img src={rightPeople} alt='open to work' className='hidden md:block w-1/3' />
            </div>

            <div className='md:flex my-4'>
                <div>
                    <img src={conservImg} alt='conservations to work' className='md:hidden w-1/2' />
                    <h2 className='text-red-700 font-light md:text-4xl'>Conversations today could lead to opportunity tomorrow</h2>
                    <p className='md:text-4xl my-3 font-thin'>Sending messages to people you know is a great way to strengthen relationships as you take the next step in your career.</p>
                </div>
                <img src={conservImg} alt='conservations to work' className='hidden md:block w-1/3' />
            </div>

            <div className='md:flex my-4'>
                <div>
                     <img src={upToDate} alt='Up to Date' className='md:hidden w-1/2' />
                    <h2 className='text-red-700 font-light md:text-4xl'>Stay up to date on your industry</h2>
                    <p className='md:text-4xl my-3 font-thin'>From live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry.</p>
                </div>
                <img src={upToDate} alt='conservations to work' className='hidden md:block w-1/3' />
            </div>
        </div>
    );
};

export default FeatureSlider;