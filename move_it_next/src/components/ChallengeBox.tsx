import React, { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';

import styles from '../styles/components/ChallengeBox.module.css';

const ChallengeBox = () => {
  const {activeChallenge} = useContext(ChallengeContext);

  return (
    <div className={styles.challengeBoxContainer}>
      {
        activeChallenge ? (
          <div className={styles.challengeActive}>
            <header>
              Ganhar {activeChallenge.amount}px
            </header>
            <main>
              <img src={`icons/${activeChallenge.type}.svg`} alt="a"/>
              <strong>Novo desafio</strong>
              <p>Levante e faça uma caminhada de 3 minutos </p>
            </main>

            <footer>
              <button type="button" className={styles.challengeFailedButton} onClick={}>Falhou</button>
              <button type="button" className={styles.challengeWinButton}>Completo</button>
            </footer>
          </div>
        ) : (
          <div className={styles.challengeNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="icon" />
              Avance de level completando desafios
            </p>
          </div>
        )
      }
    </div>
  );
}

export default ChallengeBox;
