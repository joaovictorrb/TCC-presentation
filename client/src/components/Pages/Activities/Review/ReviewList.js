import React from 'react';
import styles from '../Activities.module.css';

import { Link } from 'react-router-dom';

const ReviewList = (props) => {
  const dataActivities = Array.from(props.activities);

  const List = () => {
    return (
      <>
        {dataActivities.map((activities) => {
          let color;
          if (activities.wasRevised === 1) {
            color = ' #4a934a';
          } else {
            color = 'tomato';
          }
          return (
            <Link
              key={activities.userActivityId}
              to={`/review/${activities.userActivityId}`}
            >
              <li style={{ backgroundColor: `${color}` }}>
                <strong>{activities.username}</strong>
                Exercise {activities.title}
              </li>
            </Link>
          );
        })}
      </>
    );
  };

  return (
    <div className={styles.container}>
      <h1>Review</h1>
      <div className={styles.containerBody}>
        <ul>
          <List />
        </ul>
      </div>
    </div>
  );
};

export default ReviewList;
