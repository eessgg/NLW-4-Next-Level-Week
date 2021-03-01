import React from 'react'
import { GetServerSideProps } from 'next'

import CompleteChallenges from '../components/CompleteChallenges';
import Experience from '../components/Experience';
import Profile from '../components/Profile';
import CountDown from '../components/CountDown';

import styles from '../styles/pages/Home.module.css'

import Head from 'next/head';
import ChallengeBox from './../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountDownContext';
import { ChallengeProvider } from '../contexts/ChallengeContext'

interface HomeProps {
  level: number;
  currentExp: number;
  challengeCompleted: number;
}

export default function Home(props) {
  console.log(props)
  
  return (
    <ChallengeProvider level={props.level} currentExp={props.currentExp} challengeCompleted={props.challengeCompleted} >
      <div className={styles.container}>
        <Head>
          <title> Inicio | move.city </title>
        </Head>
        
        <Experience />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompleteChallenges />
              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengeProvider>
  )
}

// busca api, antes de construir tela
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExp, challengeCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExp: Number(currentExp),
      challengeCompleted: Number(challengeCompleted)
    }
  }
}




