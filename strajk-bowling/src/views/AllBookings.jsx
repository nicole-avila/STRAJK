import './AllBookings.scss';
import { useLocation } from 'react-router-dom';
import { db} from '../firebase'
import { collection, getDocs, doc, deleteDoc } from '@firebase/firestore';
import { useEffect, useState } from 'react';

import right from '../assets/right.svg'
import left from '../assets/left.svg'
import Top from '../components/Top/Top';
import Navigation from '../components/Navigation/Navigation';
import Input from '../components/Input/Input';

function AllBookings() {
    const { state } = useLocation();
    const [ booking, setBooking ] = useState([]);

    async function getBooking() {
        try {
            const bookingList = await getDocs(collection(db, 'bookings'));
            console.log(bookingList.docs);

            const bookingComponents = bookingList.docs.map((booking) => {
                return(
                    <article className='all-bookings__booking' key={booking.id}>
                    <p><b>Bookingnr: </b> &nbsp;{booking.data().id}</p>
                    <p><b>When:</b> &nbsp;{booking.data().when}</p>
                    <p><b>Who:</b> &nbsp;{booking.data().people}</p>
                    <button onClick={() => removeFromDatabase(booking.id)}>x</button>
                </article>
                );
            });
            setBooking(bookingComponents);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBooking();
    }, []);

    async function removeFromDatabase(deleteBookingId) {
        try {
            const deleteBooking = doc(db, 'bookings', deleteBookingId);
            await deleteDoc(deleteBooking)
            console.log(deleteBookingId);
            getBooking();
            
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <section className='all-bookings'>
        <Navigation />
        <Top title="Your Booking" />
        { state ?
         <form className='all-bookings__details'> 
            <Input label="When" type="text" customClass="all-bookings__input"
             defaultValue={ state.confirmationDetails.when.replace('T', ' ') }
             disabled="disabled" name='when'/>
             <Input label="Who" type="text"  customClass="all-bookings__input"
             defaultValue={ state.confirmationDetails.people }
             disabled="disabled" name='people'/>
             <Input label="Lanes" type="text" customClass="all-bookings__input"
             defaultValue={ state.confirmationDetails.lanes }
             disabled="disabled" name='lanes'/>
             <Input label="Booking number" type="text" customClass="all-bookings__input"
             defaultValue={ state.confirmationDetails.id }
             disabled="disabled" name='id'/>
         </form> : <h2 className='all-bookings__no-booking'>Inga bokning gjord!</h2>
        } 
        <h1 className='all-bookings__title'>All bookings</h1>
        <article className='all-bookings__bookings-list'>
            <img src={ left } alt="" />
            <aside className='all-bookings__aside'>
            { booking }
            </aside>
            <img src={ right } alt="" />
        </article > 
    </section>
    )
}

export default AllBookings;
