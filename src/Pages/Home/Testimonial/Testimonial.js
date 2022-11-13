import React from 'react';
import quoute from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';


const Testimonial = () => {
    const reviews = [

        {
            _id: 1,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people3
        },

    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-primary font-bold text-xl'>Testimonial</h4>
                    <h2 className="text-4xl">What our patients says</h2>
                </div>
                <figure>
                    <img src={quoute} className=' w-24 lg:w-48' alt="" />
                </figure>
            </div>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 grid-cols-1'>
                {
                    reviews.map(rev => <Review key={rev._id} rev={rev}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;