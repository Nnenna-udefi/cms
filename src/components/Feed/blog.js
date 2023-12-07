import React from 'react';
import ImageBox from './imageBox'
import logo from '../../images/linkedin-logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserGroup, faCalendarDays, faNewspaper, faSuitcase, faMessage, faBell, faUserCircle, faTableCells, faPhotoFilm, faSearch } from '@fortawesome/free-solid-svg-icons'

const Feed = () => {
    return (
        <div className='bg-orange-50'>
           <nav className='flex bg-white px-6 py-2 md:px-14 items-center justify-between' >
            <img src={logo} alt='Linkedin logo' className='w-8 h-8'/>
            <div className='relative flex items-start'>
                <FontAwesomeIcon icon={faSearch} className='md:absolute md:left-3 md:top-2 cursor-pointer relative ml-2 md:ml-0'/>
                <input type='text' placeholder='Search' 
                    className='bg-slate-200 placeholder:text-black placeholder:text-xs md:placeholder:text-sm rounded-sm  text-black p-1 md:py-2 md:pl-8 hidden md:block w-full md:text-sm'/>
            </div>
            <div className='flex md:ml-20 ml-4'>
                <ImageBox imageUrl={faHome} captionText="Home" />
                <ImageBox imageUrl={faUserGroup} className="text-gray-1/2" captionText="Network" />
                <ImageBox imageUrl={faSuitcase} captionText="Jobs" />
                <ImageBox imageUrl={faMessage} captionText="Messaging" />
                <ImageBox imageUrl={faBell} captionText="Notifications" />
                <ImageBox imageUrl={faUserCircle} captionText="Me" />
            </div>
            <div className='border-l-2 border-gray-500 pl-2 md:flex items-center hidden'>
                <ImageBox imageUrl={faTableCells} captionText="For Business" />
                <div>
                    <a href='/' className='text-orange-400 text-xs w-12 h-12 underline text-center' >Get hired faster. Try Premium free </a>
                </div>
            </div>
           </nav>

           <main className='md:flex block justify-center'>

                <section className='bg-white items-center text-center my-2 rounded-xl p-6 mx-6'>
                    <img src='' alt='profile image' />
                    <h3 className='font-bold'>Nnenna Udefi</h3>
                    <p className='text-gray-500 text-xs'>Software Engineer | Frontend Developer</p>
                
                </section>

                <section className='p-6 md:px-14 '>
                    <div className='bg-white p-4 w-full rounded-xl'>
                        <div className='flex items-center'>
                            <FontAwesomeIcon icon={faUserCircle} size='2xl' />
                            <input type='text' className='rounded-full border p-2 ml-6 text-sm w-full' placeholder='Start a post'  />
                        </div>

                        <div className='py-4 flex justify-between'>
                            <div>
                                <FontAwesomeIcon icon={faPhotoFilm} size='lg' className='mr-2 text-blue-500' />
                                <span className=' text-xs md:text-sm'>Media</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCalendarDays} size='lg' className='mr-2 text-amber-500' />
                                <span className=' text-xs md:text-sm'>Event</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faNewspaper} size='lg' className='mr-2 text-orange-700' />
                                <span className='text-xs md:text-sm'>Write Articles</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-white my-2 rounded-xl p-6 mx-6'>
                    <h3 className='font-bold text-lg'>Add to you Feed</h3>
                    <div className='flex mt-2'>
                        <FontAwesomeIcon icon={faUserCircle} size='2xl' className='' />
                        <div className=' ml-2'>
                            <h4 className='font-bold text-sm'>Astro David</h4>
                            <p className='text-xs text-gray-500'>DevOps Engineer | Backend Developer</p>
                            <button className='rounded-full border mt-2 border-black py-1 px-3'>+ Follow</button>
                        </div>
                    </div>

                    <div className='flex mt-2'>
                        <FontAwesomeIcon icon={faUserCircle} size='2xl' className='' />
                        <div className=' ml-2'>
                            <h4 className='font-bold text-sm'>Astro David</h4>
                            <p className='text-xs text-gray-500'>DevOps Engineer | Backend Developer</p>
                            <button className='rounded-full border mt-2 border-black py-1 px-3'>+ Follow</button>
                        </div>
                    </div>

                    <div className='flex mt-2'>
                        <FontAwesomeIcon icon={faUserCircle} size='2xl' className='' />
                        <div className=' ml-2'>
                            <h4 className='font-bold text-sm'>Astro David</h4>
                            <p className='text-xs text-gray-500'>DevOps Engineer | Backend Developer</p>
                            <button className='rounded-full border mt-2 border-black py-1 px-3'>+ Follow</button>
                        </div>
                    </div>
                
                </section>
            

           </main>

           
        </div>
    );
};

export default Feed;