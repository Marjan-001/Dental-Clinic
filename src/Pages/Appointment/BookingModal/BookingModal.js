import { format } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {

    const { name, slots } = treatment//treatment is actually appointment options just different slots
    const date = format(selectedDate, 'PP')

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const email = form.email.value;
        const name = form.name.value;
        const phone = form.phone.value;
        console.log(slot, email, name, phone);

        const booking = {

            appointmentDate: date,
            patient: name,
            slot,
            email,
            phone,
            treatment: name,

        }
        //todo: send data to the server and once the data is save then close the modal and display success toast
        console.log(booking)
        setTreatment(null)
    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10' >
                        <input type="text" disabled value={date} placeholder="Type here" className="input w-full input-bordered " />
                        <select name='slot' className="select select-bordered w-full ">

                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}
                                </option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input w-full input-bordered " />
                        <input name='email' type="text" placeholder="Email" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered " />
                        <br />
                        <input className='w-full  btn btn-accent ' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;