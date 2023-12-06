import React from 'react';
import logo from '../images/linkedin-logo.png';
import people from '../images/people-logo.png';
import learning from '../images/learning-logo.png';
import articles from '../images/articles-logo.png';
import jobLogo from '../images/job-brief.png';
import ImageWithCaption from './captionImage';
import heroImage from '../images/hero2.jpeg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
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
                            <Link to='/feed'>
                                <button className='border border-blue-900 font-bold py-4 px-6 rounded-full ml-3 cursor-pointer text-blue-900'>Sign In</button>
                            </Link>
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
                            <Link to='/feed'>
                                <button type='submit' className='w-full font-bold md:w-7/12 p-4 rounded-full border-black text-white bg-blue-600 my-2 cursor-pointer'>Sign in</button>
                            </Link>
                            
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
    );
};

export default Header;