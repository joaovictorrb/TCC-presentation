import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { UserContext } from '../../../Context/UserContext';

import styles from './Login.module.css';

import LoginForm from './LoginForm';
import LoginRegister from './LoginRegister';

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/" />;
  return (
    <section className={styles.generalContainer}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} exact />
          <Route path="register" element={<LoginRegister exact />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
