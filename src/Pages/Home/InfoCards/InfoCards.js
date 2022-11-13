import React from 'react';
import icon1 from '../../../assets/icons/clock.svg'
import icon2 from '../../../assets/icons/marker.svg'
import icon3 from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9:00am to 5:00pm everyday',
            icon: icon1,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Our Location',
            description: 'Road No:24/5A,Dhanmondi,Dhaka',
            icon: icon2,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Phone:00000000',
            icon: icon3,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },

    ]
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10'>

            {
                cardData.map(card => <InfoCard key={card.id} card={card}></InfoCard>)
            }

        </div>
    );
};

export default InfoCards;