import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

import Preloader from '../components/Preloader/Preloader';

import { PAGES } from '../utils/constants';

function ProtectedRoute({ children }) {
  const { authorized, loading } = useContext(UserContext);

  if (loading) return <Preloader />;

  return authorized ? children : <Navigate to={PAGES.MAIN} />;
}

export default ProtectedRoute;
