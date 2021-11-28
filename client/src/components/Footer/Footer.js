import React from 'react';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Final Project</p>
      <p>
        Web Platform for Teaching Parallel Programming using Blockly and the
        OpenMP and MPI libraries
      </p>
      <p>João Brum & Ana Paula Canal</p>
    </footer>
  );
}

export default Footer;
