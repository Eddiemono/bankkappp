import React from 'react'
import HomeBanner from '../components/home/HomeBanner'
import HomeBannerMiddle from '../components/home/HomeBannerMiddle'
import HomeBannerFestGrid from '../components/home/HomeBannerFestGrid'
import HomeBannerSkndGrid from '../components/home/HomeBannerSkndGrid'

const Home = () => {
  return (
    <div className='home w-100 d-flex flex-column'>
    <HomeBanner/>
    <HomeBannerMiddle/>
    <HomeBannerFestGrid/>
    <HomeBannerSkndGrid/>
    </div>
  )
}

export default Home
