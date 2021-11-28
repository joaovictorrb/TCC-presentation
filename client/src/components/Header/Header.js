import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { UserContext } from '../../Context/UserContext';
import useMedia from '../../Hooks/useMedia';
import { ReactComponent as Exit } from '../../Assets/exit.svg';

const Header = () => {
  const { data, login, userLogout } = useContext(UserContext);

  const [mobileMenu, setMobileMenu] = useState(false);

  const mobile = useMedia('(max-width: 40rem)');

  return (
    <>
      <header className={styles.header}>
        {mobile && (
          <div className={styles.divMobileBtn}>
            <button
              arial-label="Menu"
              className={`${styles.mobileBtn} ${
                mobileMenu && styles.mobileBtnActive
              }`}
              onClick={() => setMobileMenu(!mobileMenu)}
            ></button>
          </div>
        )}

        <nav
          className={`${mobile ? styles.navMobile : styles.nav} container ${
            mobileMenu && styles.navMobileActive
          }`}
        >
          <Link className={styles.menu} to="/" aria-label="homepage">
            Home
          </Link>
          <Link className={styles.menu} to="/playground">
            Playground
          </Link>
          <Link className={styles.menu} to="/docs">
            Documentation
          </Link>
          {login && data ? (
            <>
              <Link className={styles.menu} to="/exercises">
                Exercises
              </Link>
              <Link className={styles.menu} to="/review">
                Review
              </Link>
              <Link className={styles.login} to="">
                {data.username}
              </Link>
              <Link className={styles.exit} to="/" onClick={userLogout}>
                {mobile && 'Exit'}
                <Exit className={styles.exitLogo} />
              </Link>
            </>
          ) : (
            <>
              <Link className={styles.login} to="/login">
                Login / Sign Up
              </Link>
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
