import React, {useState, useEffect, useContext} from 'react';
import styles from '../styles/components/Countdown.module.css';
import { ChallengeContext } from './../contexts/ChallengeContext';

let countDownTimeout: NodeJS.Timeout;

const CountDown = () => {
  const { startNewChallenge } = useContext(ChallengeContext)

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);


  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }
  function resetCountdown() {
    clearTimeout(countDownTimeout)
    setIsActive(false);
    setTime(25 * 60)
  }

  useEffect(() => {
    console.log(isActive)
    if(isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if(isActive && time === 0) {
      console.log('final');
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge();
    }
  }, [isActive, time])

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
