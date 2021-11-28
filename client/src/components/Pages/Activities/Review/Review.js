import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';

import styles from '../Activities.module.css';

import RevisionList from './ReviewList';
import ReviewItem from './ReviewItem';

import useAxios from '../../../../Hooks/useAxios';
import { UserContext } from '../../../../Context/UserContext';

const Revision = () => {
  const [revision, setRevision] = useState({});
  const { request } = useAxios();
  const { data } = useContext(UserContext);

  const getActivitiesDone = useCallback(
    async (accessId, userId) => {
      let response = '';

      if (accessId === 2) {
        response = await request('get', `/review/user/${userId}`, null);
        setRevision(response.data);
      } else {
        response = await request('get', `/review`, null);
        setRevision(response.data);
      }
    },
    [request],
  );

  useEffect(() => {
    getActivitiesDone(data.typeUserId, data.userId);
  }, [getActivitiesDone, data.typeUserId, data.userId]);

  return (
    <section className={styles.generalContainer}>
      <div className={styles.form}>
        <Routes>
          <Route path="/:id" element={<ReviewItem />} />
          <Route
            path="/"
            element={<RevisionList activities={revision} />}
            exact
          />
        </Routes>
      </div>
    </section>
  );
};

export default Revision;
