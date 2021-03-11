import styles from '../styles/components/Experience.module.css';
import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';

const Experience = () => {
  const {currentExp, expToNextLevel} = useContext(ChallengeContext);

  const percentNextToLevel = Math.round(currentExp * 100) / expToNextLevel;
  
  return (
    <div className={styles.expBarContainer}>
      <header>
        Status
      </header>
      <div className={styles.expBar}>
          <span>0 xp</span>
          <div>
            <div style={{ width: `${percentNextToLevel}%` }} />
            <span className={styles.currentBar} style={{left: `${percentNextToLevel}%`}}>
              {currentExp}
            </span>
          </div>
          <span>{expToNextLevel} xp</span>
        </div>
    </div>
  );
}

export default Experience;
