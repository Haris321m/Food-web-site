import React from 'react';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";
import { Link } from 'react-router-dom';


function Contact(){

    return(

        <>
        
            <div className="contect m-10 md:m-20">
                <Link to="/"><h1 className='text-center font-medium text-3xl hover:cursor-pointer hover:text-greenyellow inline-flex'><MdOutlineArrowBackIos className='mr-3'/> CONTACT US</h1></Link>
                <div className="details mt-10">
                    <h2 className='text-center text-2xl'>Let's Keep in Touch</h2>
                    <form action="submit" className='flex flex-col md:flex-row mt-10 md:mt-32 w-full md:w-3/4 m-auto mb-20 md:mb-64'>
                        <div className="left md:w-1/2">
                            <ul className='list-none'>
                                <li className='text-2xl md:text-3xl font-medium'>Our Contacts</li>
                                <li className='text-lg md:text-xl flex mt-4 md:mt-8'><SlNotebook className='mr-3 md:mr-7 text-4xl md:text-6xl'/>diam neque laoreet morbi metus id aliquam</li>
                                <li className='text-lg md:text-xl flex mt-4 md:mt-8'><FiPhone className='mr-3 md:mr-5 text-3xl md:text-4xl'/>0034 602 88 59 55</li>
                                <li className='text-lg md:text-xl flex mt-4 md:mt-8'><MdOutlineMail className='mr-3 md:mr-5 text-3xl md:text-4xl'/>Info@Gmail.Com</li>
                            </ul>
                        </div>
                        <div className="right md:w-1/2 md:pl-10">
                            <h1 className='text-2xl md:text-3xl mb-5 md:mb-10'>Any Questions?</h1>
                            <input type="text" placeholder='Your Name' className='px-3 py-2 text-lg md:text-xl border-black border-2 rounded-lg mb-5 md:w-72'/>
                            <input type="text" placeholder='Email' className='px-3 py-2 text-lg md:text-xl border-black border-2 rounded-lg mb-5 md:w-72'/>
                            <textarea name="message" id="message" placeholder='Message' className='px-3 py-2 text-lg md:text-xl border-black border-2 rounded-lg mb-5 md:w-72 h-40'></textarea>
                            <button className='text-white text-lg md:text-xl bg-green-900 pl-3 pr-20 py-2 md:py-3 rounded-lg'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        
        </>

    )

}

export default Contact;
