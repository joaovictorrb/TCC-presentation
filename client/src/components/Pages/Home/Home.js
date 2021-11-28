import React from 'react';

import styles from './Home.module.css';
import UFN from '../../../Assets/ufn.png';
import blockly from '../../../Assets/blockly.png';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className={styles.Home}>
      <h2>
        Parallel Programming using Blockly and the OpenMP and MPI libraries
      </h2>

      <img src={UFN} alt="" />
      <img src={blockly} alt="" />
      <Link className={styles.button} to="/docs">
        Start Studying
      </Link>
    </section>
  );
};

export default Home;
