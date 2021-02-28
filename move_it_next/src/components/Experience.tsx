import styles from '../styles/components/Experience.module.css';
import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';

const Experience = () => {
  const {currentExp, expToNextLevel} = useContext(ChallengeContext);

  const percentNexRtLebel = 


  return (
    <header className={styles.expBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }} />
        <span className={styles.currentBar} style={{left: '50%'}}>
          300px
        </span>
      </div>
      <span>600 xp</span>
    </header>
  );
}

export default Experience;
