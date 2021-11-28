import React, { useContext } from 'react';

import { UserContext } from '../../Context/UserContext';

import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const { login } = useContext(UserContext);

  // TODO Add verifications after backend is completed
  if (login) return <Route {...props} />;
  else if (!login) return <Navigate to="/login" />;
  else return null;
};

export default ProtectedRoute;
