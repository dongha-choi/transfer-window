import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/signin');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return children;
}
