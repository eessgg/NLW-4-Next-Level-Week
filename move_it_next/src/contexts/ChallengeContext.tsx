import {createContext, useState, ReactNode} from 'react'

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengeProviderProps {
  level: number,
  currentExp: number;
  expToNextLevel: number;
  challengeCompleted: number;
  activeChallenge: Challenge
  startNewChallenge: () => void;
  levelUP: () => void;
  resetChallenge: () => void;
}

export const ChallengeContext = createContext({} as ChallengeContextData);

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
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenges)
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }


  return (<ChallengeContext.Provider value={
    {
      level,
      currentExp,
      challengeCompleted,
      startNewChallenge,
      levelUP,
      resetChallenge,
      expToNextLevel
    }
  }> {children} </ChallengeContext.Provider>)
}
