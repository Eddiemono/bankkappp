import React from 'react'
import './HomeBanner.css'
import bannerImage from '../../assets/bankbanner.png'
import security from '../../assets/shield.png'
import phone from '../../assets/phoneIcone.png'
import card from '../../assets/cards.png'
import envelope from '../../assets/envelope.png'
import { Link } from 'react-router-dom'
import Typewriter from './Typewriter'


const HomeBanner = () => {
  return (
    <div className='home_banner'>
    <div className='home_banner_image'>
    <img src={bannerImage} alt=''/>
    </div>
      
      <div className='home_banner_text'>
        <h2>Better Banking that rewards you</h2>
        <p>We help you build a solid financial future</p>
        <button>Know Us</button>
        <Typewriter />
        </div>

        <div className='home_banner_down'>
        <div className='home_banner_down_text'>
          <h1>More solutions that we can help you with</h1>
        </div>

        <div className='home_banner_down_icons'>
        <div className='icons'>
          <img src={phone} alt=''/>
          <p>Internet Banking</p>
          </div>

          <div className='icons'>
          <img src={security} alt=''/>
          <p>Security</p>
          <Link to='#'>Learn more</Link>
          </div>

          <div className='icons'>
          <img src={card} alt=''/>
          <p>Cards</p>
          <Link to='#'>Learn more</Link>
          </div>

          <div className='icons'>
          <img src={envelope} alt=''/>
          <p>Contact Us</p>
          <Link to='#'>Click me</Link>
          </div>
        
        </div>
        
        </div>
      
      </div>
  )
}

export default HomeBanner
