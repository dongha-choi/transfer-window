import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (!isSignedIn) {
      navigate('/signin');
    }
  }, [isSignedIn, navigate]);

  if (!isSignedIn) {
    return null;
  }

  return children;
}
