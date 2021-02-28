import { createContext, useState, ReactNode, useEffect } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengeContextData {
  level: number,
  currentExp: number;
  expToNextLevel: number;
  challengeCompleted: number;
  activeChallenge: Challenge
  levelUP: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void
}

interface ChallengeProviderProps {
  children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengeContextData);//interface

export function ChallengeProvider({children} : ChallengeProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExp, setCurrentExp] = useState(0);
  const [challengeCompleted, setChallengeCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null)

  const expToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  function levelUP() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    console.log('startNewChallenge')
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play();

    if(Notification.permission === 'granted') {
      new Notification('Novo desafio!', {
        body: `Valendo ${challenge.amount}xp!`
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completeChallenge() {
    if(!activeChallenge) {
      return;
    }
    const { amount } = activeChallenge;

    let finalExperience = currentExp + amount;

    if(finalExperience >= expToNextLevel) {
      finalExperience = finalExperience - expToNextLevel;
      levelUP();
    }

    setCurrentExp(finalExperience);
    setActiveChallenge(null)
    setChallengeCompleted(challengeCompleted + 1)

  }

  return (
  <ChallengeContext.Provider value={
    {
      level,
      currentExp,
      challengeCompleted,
      startNewChallenge,
      levelUP,
      resetChallenge,
      expToNextLevel,
      activeChallenge,
      completeChallenge
    }
  }> 
    {children} 
  </ChallengeContext.Provider>)
}
