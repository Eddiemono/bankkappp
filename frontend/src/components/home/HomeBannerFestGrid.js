import React from 'react'
import './HomeBannerFestGrid.css'

const HomeBannerFestGrid = () => {
  return (
    <div className='fest_grid'>
      <div className='fest_grid_card'>
        <h1>Our Current Accounts</h1>
        <p>
        Reliance Capital Trust offers Current Accounts for the US Dollar, Euro and Pound Sterling.
        </p>
        <a href='/account-types'>Tell me more</a>
      </div>

      <div className='fest_grid_card'>
        <h1>Investment Accounts</h1>
        <p>
        An investment account designed to help you save or invest towards the future.
        </p>
        <a href='/investment'>Tell me more</a>
      </div>

      <div className='fest_grid_card'>
        <h1>Gold Visa Credit Card</h1>
        <p>
        Get affordable access to credit with a Gold card that’s packed with everyday benefits
        </p>
        <a href='/card'>Tell me more</a>
      </div>
    </div>
  )
}

export default HomeBannerFestGrid
