import React, {useContext} from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountDownContext';

import styles from '../styles/components/ChallengeBox.module.css';

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext);
  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown()
  }

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>
            Ganhar {activeChallenge.amount}px
          </header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="a"/>
            <strong>Novo desafio</strong>
            <p> {activeChallenge.description} </p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFailedButton} onClick={handleChallengeFailed}>
              Falhou
            </button>
            <button type="button" className={styles.challengeWinButton} onClick={handleChallengeSucceeded}>
              Completo
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="icon"/>
            Avance de level completando desafios
          </p>
        </div>
      )
    } 
    </div>
  );
}

export default ChallengeBox;
