import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '../pages/NotFound';
import Players from '../pages/Players';
import Home from '../pages/Home';
import Roster from '../pages/Roster';
import PlayerInfo from '../components/PlayerInfo';
import PrivateRoute from '../components/PrivateRoute';
import SignIn from '../pages/SignIn';

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
      { path: 'players/:playerId', element: <PlayerInfo /> },
      { path: 'signin', element: <SignIn /> },
    ],
  },
]);

export default router;
