import React, { useContext } from 'react';
import styles from '../Activities.module.css';

/* import useAxios from '../../../../Hooks/useAxios'; */

import { BsPlusCircleFill /* BsPencil, BsTrash  */ } from 'react-icons/bs';
import { UserContext } from '../../../../Context/UserContext';

import { Link /* useNavigate */ } from 'react-router-dom';

const ExercisesList = (props) => {
  const dataActivities = Array.from(props.activities);

  const { data } = useContext(UserContext);

  const accessLevel = data.typeUserId;

  return (
    <section className={styles.container}>
      <h1>Exercises</h1>

      <div className={styles.containerBody}>
        {accessLevel === 1 ? (
          <div className={styles.newExercise}>
            <Link to="exercise/new">
              <BsPlusCircleFill size={48} color={'#13437e'} />
            </Link>
          </div>
        ) : (
          <></>
        )}
        <ul>
          {dataActivities.map((activities) => {
            return (
              <Link to={`/exercises/${activities.activityId}`}>
                <li id={activities.activityId}>
                  <b>{activities.type}</b>
                  {activities.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ExercisesList;
