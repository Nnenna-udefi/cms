import React from 'react';
import skills from '../images/skills-img.svg';
import connect from '../images/connect-img.svg';
import FeatureSlider from './slider';
import who from '../images/who-linkedin.jpeg';
import Footer from './footer';
import Header from './header';

const Home = () => {
    return (
        <div >
            <Header />

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

                <section className='px-6 py-14 md:px-16 md:py-20 md:flex md:flex-wrap justify-between'>
                    <div>
                        <img src={connect} alt='connect with people' className='w-1/2 mb-6' />
                        <h3 className='text-4xl font-light mb-4'>Connect with people who can help</h3>
                        <button className='border p-4 rounded-full border-black'>Find people you know</button>
                    </div>

                    <div>
                        <img src={skills} alt='Learn a skill' className='w-1/2 mb-6 mt-8 md:mt-0' />
                        <h3 className='text-4xl font-light mb-4'>Learn the skills you need to succeed</h3>

                        <select name='skills' className='border bg-white p-4 border-black text-xl w-3/4'>
                            <option disabled selected className='text-gray-600'>Choose a topic to learn about</option>
                            <option className='text-gray-600 bg-white hover:bg-gray-200'>Business analysis and strategy</option>
                            <option className='text-gray-600 bg-white hover:bg-gray-200'>Career Development</option>
                            <option className='text-gray-600 bg-white hover:bg-gray-200'>Customer Service</option>
                            <option className='text-gray-600 bg-white hover:bg-gray-200'>Human Resources</option>
                            <option className='text-gray-600 bg-white hover:bg-gray-200'>Finance and Accounting</option>
                        </select>

                    </div>
                </section>

                <section className='md:flex'>
                    <div className='bg-orange-50 px-6 py-10 md:px-14 md:py-20'>
                        <h3 className='text-3xl md:text-5xl text-red-800 font-bold md:font-light'>Who is LinkedIn for?</h3>
                        <p className='text-2xl md:text-4xl md:font-thin py-4'>Anyone looking to navigate their professional life.</p>
                        <div className='bg-orange-100 p-4 my-6'>
                            <p>Find a coworker or classmate</p>
                        </div>
                        <div className='bg-orange-100 p-4 my-6'>
                            <p>Find a new job</p>
                        </div>
                        <div className='bg-orange-100 p-4 my-6'>
                            <p>Find a course or training</p>
                        </div>
                    </div>
                    <img src={who} alt='who linkedin is for' className='hidden md:block md:w-1/2 ml-6'/>
                </section>

                <section className='px-6 py-10 md:py-20 md:px-14 md:bg-[url("../images/restaurant.jpeg")] bg-no-repeat bg-cover md:w-full'>
                    <h2 className='text-3xl md:text-6xl mb-6 font-light md:font-thin'>Join your colleagues, classmates, and friends on LinkedIn.</h2>
                    <button className='rounded-full text-white bg-blue-700 py-2 px-4 font-bold'>Get started</button>
                </section>
            </main>

            <Footer />
             
        </div>
    );
};

export default Home;