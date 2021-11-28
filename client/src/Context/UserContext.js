import React, { useCallback, useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxios from '../Hooks/useAxios';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { request } = useAxios();

  const navigate = useNavigate();

  const getUser = useCallback(
    async (token) => {
      const response = await request('post', '/sessions');
      setData(response.data);
      setLogin(true);
    },
    [request],
  );

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);

      const response = await request('post', '/login', {
        username,
        password,
      });

      if (response.status !== 200) {
        setError(response.message);
        throw new Error('Invalid user');
      }

      const token = response.data.token;

      window.localStorage.setItem('Token', token);

      await getUser(token);
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  const userLogout = useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem('Token');
      navigate('/');
    },
    [navigate],
  );

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('Token');
      if (token) {
        try {
          setError(null);
          setLoading(true);

          await getUser();
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout, navigate, getUser]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
