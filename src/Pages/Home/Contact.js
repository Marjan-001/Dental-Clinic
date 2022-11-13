import React from 'react';
import contact from '../../assets/images/appointment.png'
import PrimaryButton from '../../components/PrimaryButton';

const Contact = () => {
    return (
        <section className='mt-10'
            style={{ background: `url(${contact})`, height: '400px' }}
        >
            <form className='flex justify-center items-center flex-col py-28'>
                <h2 className='mb-5 text-primary font-bold text-xl'>Contact Us</h2>
                <input
                    className='drop-shadow-xl border p-2 rounded-lg mb-1 w-1/2 lg:w-2/5'
                    type="email"
                    placeholder='Your Email'
                />
                <input
                    className='drop-shadow-xl border p-2 rounded-lg mb-1 w-1/2 lg:w-2/5'
                    type="text"
                    placeholder='Subject'
                />
                <textarea
                    className='textarea textarea-primary drop-shadow-xl border p-2 rounded-lg mb-1 w-3/5 lg:w-2/5'
                    type="email"
                    placeholder='Your message'
                ></textarea>
                <PrimaryButton>Submit</PrimaryButton>


            </form>
        </section>
    );
};

export default Contact;