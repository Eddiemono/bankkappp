import React from 'react'
import './HomeBannerSkndGrid.css'
import sustainable from '../../assets/coinsave.png' 
import dudcheque from '../../assets/cheques.png'
import stories from '../../assets/bankpeople.png'
import visacard from '../../assets/viscard.png'

const HomeBannerSkndGrid = () => {
  return (
    <div className='home_sekond_grid'>
    <h1>What's New</h1>
    <div className='home_sekond_grid_containers'>
    <div className='containers'>
    <img className='img_container' src={sustainable} alt=''/>
      <h2>Sustainable Finance</h2>
      <p>See how we're building a sustainable future through the eyes of nature</p>
      <a href='/card'>More</a>
    </div>

    <div className='containers'>
      <img className='img_container' src={dudcheque} alt=''/>
      <h2>Dud Cheque Notice</h2>
      <p>Sanction for issuance of dud cheques</p>
      <a href='/card'>More</a>
    </div>

    <div className='containers'>
    <img className='img_container' src={stories} alt=''/>
      <h2>Stories</h2>
      <p>Financial Tips & Tools to make the best out of banking</p>
      <a href='/card'>More</a>
    </div>

    <div className='containers'>
    <img className='img_container' src={visacard} alt=''/>
      <h2>Visa Platinum Card</h2>
      <p>Offering enhanced privileges along with convenience and security, well suited for business travellers</p>
      <a href='/card'>More</a>
    </div>
    </div>
      
    </div>
  )
}

export default HomeBannerSkndGrid
