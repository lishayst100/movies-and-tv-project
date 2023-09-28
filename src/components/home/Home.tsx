import React from 'react'
import Hero from '../header/Hero'
import Trending from '../trending/Trending'
import Popular from '../popular/Popular'
import TopRated from '../top-rated/TopRated'
import '../trending/Trending.scss'
import Upcoming from '../upcoming/Upcoming'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Trending/>
        <Popular/>
        <TopRated/>
        <Upcoming/>
    </div>
  )
}

export default Home