import React, {useState, useEffect, useContext} from 'react';
import styles from '../styles/components/Countdown.module.css';
import { ChallengeContext } from './../contexts/ChallengeContext';
import { CountdownContext } from './../contexts/CountDownContext';


const CountDown = () => {
  const {
    minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight} </span>
        </div>
      </div>

    { hasFinished ? (
      <button disabled className={styles.startCountdownButton}>Ciclo encerrado!</button>
      ) : (
        <>
        {!isActive ?  (
          <button type="button" className={styles.startCountdownButton}  onClick={startCountdown}>
              Iniciar ao ciclo
            </button>) :
            (<button type="button" className={`${styles.startCountdownButton} ${styles.startCountdownButtonActive}`} onClick={resetCountdown}>
              Abandonar ciclo
            </button>)}
        </>
      )
    }     
    </div>
  );
}

export default CountDown;
