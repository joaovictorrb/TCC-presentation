import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';

import styles from '../Activities.module.css';
import ExercisesList from './ExercisesList';
import ExerciseItem from './ExerciseItem';
import ExerciseNew from './ExerciseNew';

import useAxios from '../../../../Hooks/useAxios';

const Exercise = () => {
  const [activities, setActivities] = useState({});
  const { request } = useAxios();
  let userAccess;

  const getActivities = useCallback(async () => {
    const response = await request('get', '/exercises');
    setActivities(response.data);
  }, [request]);

  useEffect(() => {
    getActivities();
  }, [getActivities]);

  return (
    <section className={styles.generalContainer}>
      <div className={styles.form}>
        <Routes>
          <Route path="exercise/new" element={<ExerciseNew />} />
          <Route path="/:id" element={<ExerciseItem />} />
          <Route
            path="/"
            element={
              <ExercisesList activities={activities} accessLevel={userAccess} />
            }
            exact
          />
        </Routes>
      </div>
    </section>
  );
};

export default Exercise;
