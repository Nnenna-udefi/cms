import React from 'react';
import ImageBox from './imageBox'
import logo from '../../images/linkedin-logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserGroup, faThumbsUp, faCommentDots, faPaperPlane, faCaretDown, faRetweet, faCalendarDays, faNewspaper, faSuitcase, faMessage, faBell, faUserCircle, faTableCells, faPhotoFilm, faSearch } from '@fortawesome/free-solid-svg-icons'
import profile from '../../images/nnenna-profile.jpeg';
import Syket from '../../images/syket.jpeg';
import codebase from '../../images/code-base.jpeg';


const Feed = () => {
    return (
        <div className='bg-orange-50'>
           <nav className='flex bg-white px-6 py-2 md:px-14 items-center justify-between' >
            <div className='flex'>
                <img src={logo} alt='Linkedin logo' className='w-8 h-8'/>
                <div className='relative flex items-start ml-2'>
                    <FontAwesomeIcon icon={faSearch} className='md:absolute md:left-3 cursor-pointer relative ml-2 top-2 md:ml-0'/>
                    <input type='text' placeholder='Search' 
                        className='bg-slate-200 placeholder:text-black placeholder:text-xs md:placeholder:text-sm rounded-sm  text-black p-1 md:py-2 md:pl-8 hidden md:block w-full md:text-sm'/>
                </div>
            </div>
            <div className='flex md:ml-20 ml-4'>
                <ImageBox imageUrl={faHome} captionText="Home" />
                <ImageBox imageUrl={faUserGroup} className="text-gray-1/2" captionText="Network" />
                <ImageBox imageUrl={faSuitcase} captionText="Jobs" />
                <ImageBox imageUrl={faMessage} captionText="Messaging" />
                <ImageBox imageUrl={faBell} captionText="Notifications" />
                <div className='flex items-center flex-col mr-6 md:mr-8 hover:underline hover:font-bold focus:font-bold focus:underline'>
                <img src={profile} className='w-4 rounded-full' alt='display pic' />
                    <p className="text-center text-gray-600 text-xs hidden md:block ">Me
                    <FontAwesomeIcon icon={faCaretDown} className='ml-1'/></p>
                </div>
                
            </div>
            <div className='border-l-2 border-gray-500 pl-2 md:flex items-center hidden'>
                <ImageBox imageUrl={faTableCells} captionText="For Business" 
                />
                <div>
                    <a href='/' className='text-orange-300 text-xs w-8 h-10 underline text-center' >Get hired faster. </a>
                    <div>
                    <a href='/' className='text-orange-300 text-xs w-8 h-10 underline text-center' >Try Premium free. </a>
                    </div>
                </div>
            </div>
           </nav>

           <main className='md:flex md:mx-10 block justify-center '>

                <section className='bg-white  border border-gray-400  my-2 rounded-xl p-6 mx-6 flex-none h-fit'>
                    <div className='flex flex-col items-center text-center'>
                        <img src={profile} className='w-14 rounded-full border-2 border-gray-500' alt='display pic' />
                        <h3 className='font-bold'>Nnenna Udefi</h3>
                        <p className='text-gray-500 text-xs'>Software Engineer | Frontend Developer</p>
                    </div>
                    <div className="border-b p-1 w-full border-gray-500 mt-4 mb-6" />
                    <p className='text-xs text-gray-500 font-bold mb-2'>Who viewed your profile <span className='text-blue-500 ml-2'>28</span></p>
                    <p className='text-xs text-gray-500 font-bold mb-2'>Impressions of your post <span className='text-blue-500 ml-2'>98</span></p>
                    <div className="border-b p-1 w-full border-gray-500 mt-2 mb-3" />
                    <p className='text-xs text-gray-500'>Accelerate your carrer</p>
                    <p className='text-xs font-bold mb-2 underline'>Try Premium for NGN0</p>
                    <div className="border-b p-1 w-full border-gray-500 mt-2 mb-3" />
                    <p className='text-xs font-bold'>My Items</p>
                </section>

                <section className='p-6 md:p-2 md:w-1/2'>
                    <div className='bg-white p-4 rounded-xl border border-gray-400'>
                        <div className='flex items-center'>
                        <img src={profile} className='w-8 md:w-12 rounded-full' alt='display pic' />
                            <input type='text' className='rounded-full border border-gray-500 p-3 ml-3 text-sm w-full placeholder:text-black focus:bg-neutral-200 focus:border-none' placeholder='Start a post'  />
                        </div>

                        <div className='py-4 md:px-4 flex justify-between'>
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

                    <div className='bg-white p-4 my-4 rounded-xl border border-gray-400'>
                        <div className='flex'>
                            <img src={Syket} className='w-8 h-8 mr-4 md:w-12 rounded-full' alt='display pic' />
                            <div>
                                <a href='https://www.linkedin.com/in/syketb/' className='font-bold'>
                                    Syket Bhattachergee<span className='text-gray-500 text-sm ml-2'>• 3rd+</span>
                                </a>
                                <p className='text-sm text-gray-500'>Software Engineer @ Woofmeets | Frontend | React...</p>
                            </div>
                            <div className='flex ml-6 items-start justify-end'>
                                <button className='text-blue-500 font-bold'> + Follow </button>
                                <p className=' ml-2 text-gray-500 font-bold'>...</p>
                            </div>
                            
                        </div>

                        <div className='py-4 md:px-4'>
                            <p>
                            Diving into the code time capsule! 🕰️ After 3.5 years in the frontend realm, I'm sharing the highs, lows, and hacks of decoding old code bases. It's a digital treasure hunt filled with surprises, challenges, and countless aha moments. Let's turn code history into our playground! 
                            </p>
                            <p className='mb-2'>#CodeAdventures #FrontendTales #DevLifeChronicles</p>
                            <img src={codebase} alt='old code base' />
                        </div>

                        <div className="border-b p-1 w-full border-gray-500 mt-2 mb-3" />

                        <div className='md:mx-6 text-gray-700 flex justify-between text-sm'>
                            <button className='focus:text-blue-500 hover:text-blue-500'>
                                <FontAwesomeIcon icon={faThumbsUp} className='mr-1' />
                                Like
                            </button>
                            <button className='focus:text-blue-500 hover:text-blue-500'>
                                <FontAwesomeIcon icon={faCommentDots} className='mr-1' />
                                Comment
                            </button>
                            <button className='focus:text-blue-500 hover:text-blue-500'>
                                <FontAwesomeIcon icon={faRetweet} className='mr-1'/>
                                Repost
                            </button>
                            <button className='focus:text-blue-500 hover:text-blue-500'>
                                <FontAwesomeIcon icon={faPaperPlane} className='mr-1'/>
                                Send
                            </button>
                        </div>
                    </div>
                </section>

                <section className='bg-white my-2 border border-gray-400 rounded-xl p-6 mx-2 md:w-1/3 h-fit'>
                    <h3 className='font-bold text-lg'>Add to your Feed</h3>
                    <div className='flex mt-2'>
                    <img src={Syket} className='w-8 h-8 rounded-full' alt='display pic' />
                        <div className=' ml-2'>
                            <h4 className='font-bold text-sm'>Syket Bhattachergee</h4>
                            <p className='text-xs text-gray-500'>Software Engineer @ Woofmeets | Frontend | React Specialist | Next | Email Marketing Specialist</p>
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