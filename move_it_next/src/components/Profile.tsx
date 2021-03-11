import React, { useContext } from 'react';
import { ChallengeContext } from './../contexts/ChallengeContext';

import styles from '../styles/components/Profile.module.css'

const avatar = "../images/avatar.png";

const Profile = () => {
  const {level} = useContext(ChallengeContext);

  return (
    <div className={styles.profileContainer}>
      <header>Profile</header>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2xUgv0pMowiKyRG9wrjHCTH9aP-oPzGAKSw&usqp=CAU" alt="avatar" />
      <div className={styles.profileText}>
        <strong> Mary Doe </strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}

export default Profile;
