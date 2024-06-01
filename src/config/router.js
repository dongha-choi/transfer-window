import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '../pages/NotFound';
import Players from '../pages/Players';
import Home from '../pages/Home';
import Roster from '../pages/Roster';
import PrivateRoute from '../components/PrivateRoute';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Scout from '../pages/Scout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'players', element: <Players /> },
      {
        path: 'roster',
        element: (
          <PrivateRoute>
            <Roster />
          </PrivateRoute>
        ),
      },
      { path: 'players/:playerId', element: <Scout /> },
      { path: 'signin', element: <SignIn /> },
      { path: 'signup', element: <SignUp /> },
    ],
  },
]);

export default router;
