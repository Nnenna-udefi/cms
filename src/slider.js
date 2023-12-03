import React from 'react';
import Slider from 'react-slick';
import rightPeople from './images/right-people.png';
import conservImg from './images/conservations.png';
import upToDate from './images/upToDate.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';

const FeatureSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const isMobile = window.innerWidth < 768;

    return (
        <Slider {...settings}>
            <div className={isMobile ? 'my-4' : 'flex'}>
                <div>
                    <img src={rightPeople} alt='open to work' style={{ display: isMobile ? 'block' : 'none' }} className='w-1/2' />
                    <h2 className='text-red-700 text-2xl md:text-4xl my-2 font-light'>Let the right people know you’re open to work</h2>
                    <p className='md:text-4xl my-3 font-thin'>With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.</p>
                </div>
                <img src={rightPeople} alt='open to work' style={{ display: isMobile ? 'none' : 'block' }} className='w-1/3'/>
            </div>

            <div className={isMobile ? 'my-4' : 'flex'}>
                <div>
                    <img src={conservImg} alt='conservations to work' style={{ display: isMobile ? 'block' : 'none' }} className='w-1/2'/>
                    <h2 className='text-red-700 font-light md:text-4xl'>Conversations today could lead to opportunity tomorrow</h2>
                    <p className='md:text-4xl my-3 font-thin'>Sending messages to people you know is a great way to strengthen relationships as you take the next step in your career.</p>
                </div>
                <img src={conservImg} alt='conservations to work' style={{ display: isMobile ? 'none' : 'block' }} className='w-1/3'/>
            </div>

            <div className={isMobile ? 'my-4' : 'flex'}>
                <div className=''>
                    <img src={upToDate} alt='Up to Date' style={{ display: isMobile ? 'block' : 'none' }} className='w-1/2' />
                    <h2 className='text-red-700 font-light md:text-4xl'>Stay up to date on your industry</h2>
                    <p className='md:text-4xl my-3 font-thin'>From live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry.</p>
                </div>
                <img src={upToDate} alt='conservations to work' style={{ display: isMobile ? 'none' : 'block' }}  className='w-1/3'/>
            </div>
        </Slider>
    );
};

export default FeatureSlider;
