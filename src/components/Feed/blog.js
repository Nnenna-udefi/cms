import React from 'react';
import ImageBox from './imageBox'
import logo from '../../images/linkedin-logo2.png';
import bell from '../../images/bell.png';
import homeLogo from '../../images/home-l.png';
import msgLogo from '../../images/messaging.png';
import jobLogo from '../../images/job-brief.png';
import people from '../../images/people-logo.png';
import person from '../../images/person.png'
import { faHome, faUser, faSuitcase, faMessage, faBell } from '@fortawesome/free-solid-svg-icons'

const Feed = () => {
    return (
        <div className='bg-orange-50'>
           <nav className='flex bg-white px-6 py-2 md:px-14 items-center justify-between' >
            <img src={logo} alt='Linkedin logo' className='w-8 h-8'/>
            <input type='text' placeholder='Search' className='bg-slate-200 placeholder:text-black rounded-sm text-black p-2 w-1/4 ml-2 md:text-sm'/>
            <div className='flex md:ml-20 ml-4'>
                <ImageBox imageUrl={faHome} captionText="Home" />
                <ImageBox imageUrl={faUser} className="text-gray-1/2" captionText="Network" />
                <ImageBox imageUrl={faSuitcase} captionText="Jobs" />
                <ImageBox imageUrl={faMessage} captionText="Messaging" />
                <ImageBox imageUrl={faBell} captionText="Notifications" />
                <ImageBox imageUrl={person} captionText="Me" />
            </div>
            <div className='border-l-2 border-gray-500 pl-2 flex items-center'>
                <ImageBox imageUrl={jobLogo} captionText="For Business" />
                <a href='/' className='text-orange-400 text-sm w-15 text-center' >Get hired faster. Try Premium free </a>
            </div>
           </nav>

           <section className=' p-6 md:px-14 '>
            <div className='bg-white p-4 border-gray-400 rounded-xl w-1/2'>
                <div className='flex w-8 h-8'>
                    <img src={person} alt='me' />
                    <input type='text' className='rounded-full border p-4 ml-6' placeholder='Start a post'  />
                </div>
            </div>
           </section>
        </div>
    );
};

export default Feed;