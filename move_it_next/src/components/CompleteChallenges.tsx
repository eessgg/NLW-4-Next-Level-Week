import { useContext } from 'react';
import styles from '../styles/components/CompleteChallenges.module.css';
import { ChallengeContext } from './../contexts/ChallengeContext';

const CompleteChallenges = () => {
  const { challengeCompleted } = useContext(ChallengeContext)
  
  return (
    <div className={styles.completeChallengesContainer}>
      <span>Desafios completos</span>
      <span> {challengeCompleted} </span>
    </div>
  );
}

export default CompleteChallenges;
