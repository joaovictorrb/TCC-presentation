import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Error from '../../Helper/Error';

import styles from './Login.module.css';
import stylesBtn from '../../Forms/Button.module.css';

import Input from '../../Forms/Input';
import Button from '../../Forms/Button';
import useForm from '../../../Hooks/useForm';
import { UserContext } from '../../../Context/UserContext';

const LoginForm = () => {
  const { login, userLogin, error, loading } = useContext(UserContext);
  const username = useForm();
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  if (login) return <Navigate to="/" />;
  return (
    <section className="animationLeft">
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Username" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        <Error error={error} />
        {loading ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button type="submit">Sign In</Button>
        )}
        <Error error={error && 'Incorrect info.'} />
      </form>
      <div className={styles.register}>
        <h2 className={styles.subTitle}>Register</h2>
        <p>Not yet signed up?</p>

        <Link className={stylesBtn.button} to="/login/register">
          Sign Up
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
