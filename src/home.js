import React from 'react';
import logo from './images/linkedin-logo.png';
import people from './images/people-logo.png';
import learning from './images/learning-logo.png';
import articles from './images/articles-logo.png';
import jobLogo from './images/job-brief.png';
import ImageWithCaption from './captionImage';
import heroImage from './images/hero2.jpeg'
import skills from './images/skills-img.svg';
import connect from './images/connect-img.svg';
import FeatureSlider from './slider';

const Home = () => {
    return (
        <div >
            <header className='mx-3 md:mx-16'>
                <nav className='flex justify-between items-center mt-2'>
                    <img src={logo} alt='Linked in logo' className='w-32' />
                    <div className='flex items-center'>
                        <div className='hidden md:flex'>
                            <ImageWithCaption
                                imageUrl={articles}
                                captionText="Articles"
                            />

                            <ImageWithCaption
                                imageUrl={people}
                                captionText="People"
                            />
                            <ImageWithCaption
                                imageUrl={learning}
                                captionText="Learning"
                            />
                            <ImageWithCaption
                                imageUrl={jobLogo} 
                                captionText="Jobs"
                            />
                        </div>
                        
                        <div className='border-l-2 border-gray-500 pl-2'>
                            <a href='/' className='ml-3 mr-2  font-bold'>Join Now</a>
                            <button className='border border-blue-900 font-bold py-4 px-6 rounded-full ml-3 cursor-pointer text-blue-900'>Sign In</button>
                        </div>
                    </div>
                </nav>
                <section className='md:flex mt-3'>
                    <div>
                        <div className='my-10'>
                            <h1 className='md:text-6xl text-3xl font-light  text-red-700'>Welcome to your professional community</h1>
                        </div>
                        <form>
                            <label htmlFor='email' className='mt-4'>Email or phone</label><br />
                            <input type='text' name='email' className='w-full mt-2 mb-6 md:w-7/12 border border-black p-4 rounded' /><br />
                            <label htmlFor='password'>Password</label><br />
                            <input type='password' className='w-full my-2 md:w-7/12 border border-black p-4 rounded' /><br />
                            <a href='/'>Forgot password?</a><br />
                            <button type='submit' className='w-full font-bold md:w-7/12 p-4 rounded-full border-black text-white bg-blue-600 my-2 cursor-pointer'>Sign in</button>
                            
                        </form>
                            <div className='flex items-center my-6'>
                                <hr className='md:w-1/4 w-1/2 text-black font-bold'/><span className='mx-2'>or</span><hr className='md:w-1/4 font-bold w-1/2 text-black'/>
                            </div>
                            <p className='md:w-7/12 my-2 md:text-left text-center text-xs'>By clicking Continue, you agree to Linkedin's <a href='/' className='text-blue-600 font-bold'>User Agreement, Privacy Policy</a>, and <a href='/' className='text-blue-600 font-bold'>Cookie Policy.</a></p>
                            <button className='border-2 my-4 w-full md:w-7/12 p-4 rounded-full border-black cursor-pointer'>New to LinkedIn? Join now</button>
                    </div>
                    <div className='mt-20'>
                        <img src={heroImage} alt='someone learning on his laptop' />
                    </div>
                </section>
            </header>

            <main>
                <section className='bg-orange-50 px-6 py-14 md:px-16 md:flex'>
                    <div >
                        <h2 className='md:text-5xl text-3xl md:font-thin font-bold mb-2'>Explore collaborative artices</h2>
                        <p className='md:w-3/4'>We’re unlocking community knowledge in a new way. Experts add insights directly into each article, started with the help of AI.</p>
                    </div>
                    <div className='md:ml-4 mt-4 md:mt-0'>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>Marketing</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>Public Administration</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>Healthcare</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>Engineering</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>IT Services</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>Sustainability</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>Business Administration</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>Telecommmmunition</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>HR Management</button>
                    </div>
                </section>

                <section className=' px-6 py-14 md:px-16 md:flex justify-between'>
                    <div className='' >
                        <h2 className='md:text-5xl text-3xl md:font-thin mb-2 font-bold '>Find the right job or internship for you</h2>
                    </div>
                    <div className='md:ml-4 mt-4 md:mt-0 md:w-8/12'>
                        <h3 className='text-gray-500 mb-4 font-bold'>SUGGESTED SEARCHES</h3>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>Engineering</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>Business Development</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>Financee</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>Administrative Assistant</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>Retail Associate</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>Customer Service</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>Operations</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>Information Technology</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>Marketing</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>Human Resources</button>
                    </div>
                </section>

                <section className='bg-orange-50 px-6 py-14 md:px-16 md:flex'>
                    <h1 className='md:text-4xl text-3xl text-red-800 mb-2 font-bold md:w-2/5'>Post your job for millions of people to see</h1>
                    <button className='border rounded-full px-6 py-1 border-blue-600 text-blue-600 font-bold m-2 hover:bg-opacity-5 md:ml-10'>Post a job</button>
                </section>

                <section className=' px-6 py-14 md:px-16 md:flex justify-between'>
                    <div >
                        <h2 className='md:text-5xl text-3xl md:font-thin mb-2 font-bold'>Discover the best software tools</h2>
                        <p className='md:w-3/4'>Connect with buyers who have first-hand experience to find the best products for you.</p>
                    </div>
                    <div className='md:ml-4 mt-4 md:mt-0 md:w-9/12'>
                        <h3 className='text-gray-500 mb-4 font-bold'>SUGGESTED SEARCHES</h3>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>E-Commerce Platforms</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>CRM Software</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>Human Resources Management Systems</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>Recruiting Software</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>Sales Intelligent Software</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>Project Management Software</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>Help Desk Software</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>Social Networking Software</button>
                        <button className='border rounded-full p-4 border-black m-1 hover:bg-black hover:bg-opacity-5'>Desktop Publishing Software</button>
                        <button className='border rounded-full p-4 border-blue-600 text-blue-600 font-bold m-1 hover:bg-opacity-5'>Show All</button>
                    </div>
                </section>

                <section className='bg-orange-50 px-6 py-14 md:px-16'>
                    <FeatureSlider />
                </section>

                <section className='px-6 py-14 md:px-16 md:flex md:flex-wrap justify-between'>
                    <div>
                        <img src={connect} alt='connect with people' className='w-1/2 mb-6' />
                        <h3 className='text-4xl font-light mb-4'>Connect with people who can help</h3>
                        <button className='border p-4 rounded-full border-black'>Find people you know</button>
                    </div>

                    <div>
                        <img src={skills} alt='Learn a skill' className='w-1/2 mb-6' />
                        <h3 className='text-4xl font-light mb-4'>Learn the skills you need to succeed</h3>
                        <button className='border p-4 rounded-full border-black'>Find people you know</button>
                    </div>
                </section>
            </main>
            
        </div>
    );
};

export default Home;