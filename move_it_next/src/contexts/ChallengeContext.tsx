import {createContext, useState, ReactNode} from 'react';
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

  function levelUP() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    console.log('startNewChallenge')
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge)
  }

  function resetChallenge() {
    setActiveChallenge(null)
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
      activeChallenge
    }
  }> 
    {children} 
  </ChallengeContext.Provider>)
}
