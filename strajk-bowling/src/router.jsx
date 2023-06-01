import { createBrowserRouter } from 'react-router-dom';

import Booking from './views/Booking';
import Confirmation from './views/Confirmation';
import AllBookings from './views/AllBookings';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Booking />,
    },
    {
      path: '/confirmation',
      element: <Confirmation />,
    },
    {
      path: '/all-bookings',
      element: <AllBookings />,
    }
]);

export default router;