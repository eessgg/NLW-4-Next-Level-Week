import { createContext, useState, ReactNode, useEffect } from 'react';
import challenges from '../../challenges.json';
import Cookies from 'js-cookie';
import LevelUpModal from '../components/LevelUpModal';

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
  completeChallenge: () => void;
  closeLevelModal: () => void;
}

interface ChallengeProviderProps {
  children: ReactNode;
  level: number;
  currentExp: number;
  challengeCompleted: number;
}

export const ChallengeContext = createContext({} as ChallengeContextData);//interface

export function ChallengeProvider({
  children,
 ...rest
} : ChallengeProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExp, setCurrentExp] = useState(rest.currentExp ?? 0);
  const [challengeCompleted, setChallengeCompleted] = useState(rest.challengeCompleted ?? 0);

  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const expToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  // salvando cookies
  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExp', String(currentExp));
    Cookies.set('challengeCompleted', String(challengeCompleted));
  }, [level, currentExp, challengeCompleted ])

  function levelUP() {
    setLevel(level + 1)
    setIsLevelUpModalOpen(true)
  }

  function closeLevelModal() {
    setIsLevelUpModalOpen(false)
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
      completeChallenge,
      closeLevelModal
    }
  }> 
    {children} 
    { isLevelUpModalOpen && <LevelUpModal /> }
  </ChallengeContext.Provider>)
}
