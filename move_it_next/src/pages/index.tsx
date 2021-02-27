import React from 'react'
import CompleteChallenges from '../components/CompleteChallenges';
import { Countdown } from '../components/CountDown';
import Experience from '../components/Experience';
import Profile from '../components/Profile';
import CountDown from '../components/CountDown';

import styles from '../styles/pages/Home.module.css'

import Head from 'next/head';

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
        </div>
        <div>
          <CountDown />
        </div>
      </section>
    </div>
  )
}
