import './Confirmation.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { collection, addDoc } from '@firebase/firestore'
import { db } from '../firebase';

import Top from '../components/Top/Top';
import Navigation from '../components/Navigation/Navigation';
import Input from '../components/Input/Input';


function Confirmation() {
    const { state } = useLocation();
    const navigate = useNavigate();


    let booking = {
        when: '',
        people: '',
        lanes: '',
        id: ''
    }

    async function saveToDatabase(event) {
        event.preventDefault();
        booking.when = event.target.when.value,
        booking.people = event.target.people.value,
        booking.lanes = event.target.lanes.value,
        booking.id = event.target.id.value

        console.log(booking);
        try {
            await addDoc(collection(db, 'bookings'), booking);

        } catch (error) {
            console.log(error);
        }
            navigate('/all-bookings', { state: {confirmationDetails: booking }})
    };

    return (
        <section className='confirmation'>
            <Navigation />
            <Top title="See you soon!" />
            { state ?
                <form className='confirmation__details' onSubmit={ saveToDatabase }> 
                    <Input label="When" type="text" customClass="confirmation__input"
                    defaultValue={ state.confirmationDetails.when.replace('T', ' ') }
                    disabled="disabled" name='when'/>
                    <Input label="Who" type="text"  customClass="confirmation__input"
                    defaultValue={ state.confirmationDetails.people }
                    disabled="disabled" name='people'/>
                    <Input label="Lanes" type="text" customClass="confirmation__input"
                    defaultValue={ state.confirmationDetails.lanes }
                    disabled="disabled" name='lanes'/>
                    <Input label="Booking number" type="text" customClass="confirmation__input"
                    defaultValue={ state.confirmationDetails.id }
                    disabled="disabled" name='id'/>
                    <article className='confirmation__price'>
                        <p>Total:</p>
                        <p>{ state.confirmationDetails.price } sek</p>
                    </article>
                    <button className='button confirmation__button'>Sweet, let's go!</button>
                </form> : <h2 className='confirmation__no-booking'>Inga bokning gjord!</h2>
            }
        </section>
    )
}

export default Confirmation;