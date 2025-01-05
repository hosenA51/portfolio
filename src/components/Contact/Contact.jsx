import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_657c7xr', 'template_cac0eon', form.current, {
                publicKey: 'CnY8bTpkB56BbgohM',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div id='contact'
         className='bg-black py-20'>
            <h2 className="text-4xl font-bold text-center mb-8 text-orange-500">
                Contact Me
            </h2>
            <div className='md:flex gap-4 items-center justify-center'>
                <div className='card bg-gray-600 w-full max-w-sm shrink-0 shadow-2xl ml-5 md:ml-0'>
                    <form className='card-body' ref={form} onSubmit={sendEmail}>
                        <label className="label-text text-white">Name</label>
                        <input className='input input-bordered text-white bg-gray-700' type="text" name="user_name" />
                        <label className="label-text text-white">Email</label>
                        <input className='input input-bordered text-white bg-gray-700' type="email" name="user_email" />
                        <label className="label-text text-white">Message</label>
                        <textarea className="textarea textarea-error text-white bg-gray-700" name="message" />
                        <input className="btn btn-outline rounded-3xl text-lg font-semibold px-6 text-[#FF6B00] hover:bg-[#FF6B00]" type="submit" value="Send" />
                    </form>
                </div>
                <div className='hidden md:flex w-1 mx-8 h-80 border-2 text-white mb-2'>
                </div>
                <div className='space-y-5 flex flex-col justify-center mt-6 ml-5 md:ml-0'>
                    <h1 className='text-4xl text-[#FF6B00] font-bold'>Hosen Ahmed</h1>
                    <p className='text-lg font-semibold text-white'>Address: Moulvibazar, Sylhet, Bangladesh</p>
                    <p className='text-lg font-semibold text-white'>Emall: hosenahmed2552@gmail.com</p>
                    <p className='text-lg font-semibold text-white'>Phone:+8801710681251</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;