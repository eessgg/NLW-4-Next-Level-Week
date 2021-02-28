import React from 'react'
import CompleteChallenges from '../components/CompleteChallenges';
import Experience from '../components/Experience';
import Profile from '../components/Profile';
import CountDown from '../components/CountDown';

import styles from '../styles/pages/Home.module.css'

import Head from 'next/head';
import ChallengeBox from './../components/ChallengeBox';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Inicio | move.city </title>
      </Head>
      
      <Experience />

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
    </div>
  )
}
