import React, { useRef } from 'react'
import logo from './imgs/logo.png'
import playstor from './imgs/download-1.png'
import appstor from './imgs/download-2.png'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer(){

    return(

        <>

            <div className="footer bg-green-900 text-white p-10">
                <div className="top flex justify-center items-center">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="social flex">
                        <h1 className='text-4xl ml-8 hover:cursor-pointer hover:text-greenyellow'><FaFacebook /></h1>
                        <h1 className='text-4xl ml-8 hover:cursor-pointer hover:text-greenyellow'><FaTwitter /></h1>
                        <h1 className='text-4xl ml-8 hover:cursor-pointer hover:text-greenyellow'><IoLogoWhatsapp /></h1>
                    </div>
                </div>
                <div className="bottom flex justify-between mt-10 lg:px-20 md:px-10">
                    <div className="about">
                        <div className="ul list-none">
                            <Link to='/about'><li className='text-2xl font-bold hover:cursor-pointer hover:text-[greenyellow]'>About Us</li></Link>
                            <Link to='/privacy'><li className='text-xl hover:cursor-pointer hover:text-[greenyellow]'>Privacy Policy</li></Link>
                            <Link to='/feedback'><li className='text-xl hover:cursor-pointer hover:text-[greenyellow]'>Feedback</li></Link>
                        </div>
                    </div>
                    <div className="contect list-none">
                        <div className="ul">
                            <Link to="/contact"><li className='text-2xl font-bold hover:cursor-pointer hover:text-[greenyellow]'>Contact Us</li></Link>
                           <Link to="https://www.google.com/maps/place/40%C2%B029'12.6%22N+3%C2%B021'01.3%22W/@40.4868355,-3.3529413,17z/data=!3m1!4b1!4m4!3m3!8m2!3d40.4868355!4d-3.3503664?entry=ttu"> <li className='text-xl hover:cursor-pointer hover:text-[greenyellow]'>Store Locator</li></Link>
                            <Link to='/terms'><li className='text-xl hover:cursor-pointer hover:text-[greenyellow]'>Terms & Conditions</li></Link>
                        </div>
                    </div>
                    <div className="app lg:flex sm:grid">
                        <img src={playstor} alt="" className='h-10 hover:cursor-pointer'/>
                        <img src={appstor} alt="" className='h-10 lg:ml-5 sm:ml-0 hover:cursor-pointer'/>
                    </div>
                </div>
            </div>

        </>

    )

}

export default Footer;