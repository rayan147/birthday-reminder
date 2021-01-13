import Head from 'next/head'
import styles from '../styles/Home.module.css'
//import data from '../data/index';
import List from '../components/List';
import React, { useState } from 'react';
import useSWR from "swr"

const fetcher = async (...args)=> {
  const res = await fetch(...args)
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    error.info = await res.json()
    error.status = res.status
    throw error
  }
  return res.json()
}


export default function Home() {

  const {data,error}= useSWR("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false",fetcher)
 

  if(error) {
    return <div>Error...{error}</div>
  }
  if(!data){
    return <h3 className="load">Loading...</h3>
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>CryptoBoard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <main>
      <section className='container'>
        <h3 className="load">Top 20 cryptos</h3>
        <List coins={data} />
      </section>
    </main>
    </div>
  )
}
