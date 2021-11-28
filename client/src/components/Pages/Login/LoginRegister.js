import React, { useState, useContext } from 'react';
import { UserContext } from '../../../Context/UserContext';

import Input from '../../Forms/Input';
import Button from '../../Forms/Button';
import useForm from '../../../Hooks/useForm';
import Error from '../../Helper/Error';
import useAxios from '../../../Hooks/useAxios';

import styles from './Login.module.css';
import labelStyle from '../../Forms/Input.module.css';
import { useNavigate } from 'react-router';

const LoginRegister = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');
  const [type, setType] = useState();
  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useAxios();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    let typeUserId = 2;
    if (type === 'tutor') {
      typeUserId = 1;
    }

    const response = await request('post', '/login/register', {
      username: username.value,
      email: email.value,
      password: password.value,
      typeUserId,
    });

    if (response && response.status === 200) {
      userLogin(username.value, password.value);
      navigate('/');
    }
  }

  return (
    <section className={styles.login}>
      <div className="animationLeft">
        <h1 className={styles.title}>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <Input label="Username" type="text" name="Username" {...username} />
          <Input label="Email" type="email" name="Email" {...email} />
          <Input
            label="Password"
            type="password"
            name="Password"
            {...password}
          />
          <label className={labelStyle.label}>Do you want to be a tutor?</label>
          <select
            className={styles.selectType}
            name="User Type"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="student">Student</option>
            <option value="tutor">Tutor</option>
          </select>

          {loading ? (
            <Button disabled>Loading...</Button>
          ) : (
            <Button type="submit">Sign Up</Button>
          )}

          <Error error={error} />
        </form>
      </div>
    </section>
  );
};

export default LoginRegister;
