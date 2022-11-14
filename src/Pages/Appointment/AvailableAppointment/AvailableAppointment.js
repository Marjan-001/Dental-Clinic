import { format } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))

    }, [])
    return (
        <section className='my-16'>
            <p className='text-secondary mt-10 font-bold text-center'>Available Appointment on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }

            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    treatment={treatment}></BookingModal>}
        </section>
    );
};

export default AvailableAppointment;