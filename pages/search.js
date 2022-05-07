import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'

function Search() {
  return (
      <>
        <Header/>
        <Head>
        <title>Search | Disney+</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
    <div className='flex items-center justify-center m-10 flex-col gap-5'>
        <h1 className='text-5xl'>
            Search
        </h1>
        <p>
            Coming Soon!
        </p>
    </div>
    </>
  )
}

export default Search