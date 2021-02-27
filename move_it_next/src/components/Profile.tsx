import React from 'react';
import styles from '../styles/components/Profile.module.css'

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://d1qxviojg2h5lt.cloudfront.net/images/01D80BDTF6NRY5HWTJ8BH3PNWQ/peakyblinders400.png" alt="PROFILE" />
      <div>
        <strong> Diego Fernandes </strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}

export default Profile;
