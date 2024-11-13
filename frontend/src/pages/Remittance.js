import React from 'react'
import './CSS/Investment.css'
import { Link, useNavigate } from 'react-router-dom'
import leftImage from '../assets/bankbanner.png'
import security from '../assets/eurosec.png'
import HomeBannerSkndGrid from '../components/home/HomeBannerSkndGrid'

const Remittance = () => {

  const navigate = useNavigate()

  return (
    <div>
    <div className='investment'>
    <div className='investment_flex'>
      <div className='investment_left'>
      <h2>Bank Account </h2>
      <img src={leftImage} alt='' />
      <p>Being an independent financial provider, we have the ability to create truly bespoke ABL packeges tailored
      to specific objectives, taking into account the need for flexible timescales and fluctuating demand. Our
      ABL can be asset or invoice finace led...</p>
      <Link to='/' >Find out more</Link>
      <button onClick={() => navigate('/account-types')&window.scrollTo(0,0)}>find out</button>

      <div className='security'>
      <img src={security} alt=''/>
      <p style={{color: 'red'}}>Your account is automatically protected by;</p>
      <p style={{color: 'green', marginTop: '-10px'}}>Deluxe Provent ID Theft/Fraud Protection.</p>
      <p style={{marginTop: '-5px'}}>This service includes:</p>
      <p style={{marginTop: '-5px'}}>➧  Access to dedicated, certified Resolution
      Specialists</p>
      <p style={{marginTop: '-5px'}}>➧  Convenient 24/7 access to secure storage
      of your wallet contents</p>
      <p style={{marginTop: '-5px'}}>➧  Assistance if you lose your wallet,
    experience fraud, or your identity has been
    compromised</p>
      <p style={{marginTop: '-5px'}}>➧  Help to recover your identity to pre-theft
      status</p>
      <p style={{marginTop: '-5px'}}>➧  Access to a one-time scan of your name
      and address</p>
      <p style={{marginTop: '-5px'}}>➧  Monthly email fraud reports</p>
      </div>
      
      </div>
      <div className='investment_right'>
        <h3>Remittance</h3>
        <div className='investment_right_contents'>
          <p style={{}}>Saving for a long-term project or even for a rainy day is always a challenge. With our Prosper Savings 
          Account, you give your savings a real chance to grow. With great interest rates, your savings will grow 
          faster while you enjoy the many other benefits of this account.</p>
          {/* <p style={{}}></p> */}
          <h2>Benefits:</h2> 
          <p className=''> ⬗ Access to personal overdraft or loan of up to 75% of your savings account balance</p>
          <p className='benefit'>⬗ Competitive tiered interest rates</p>
          <p className='benefit'>⬗  Access to investment opportunities for long-term saving needs</p>
          <p className='benefit'>⬗   Access to a wide range of life and personal insurance packages</p>
          <p className='benefit'>⬗   Credit facilities available subject to qualifications</p>
          <p className='benefit'>⬗   No account maintenance fee is charged if average monthly balance stays above $5,000  
          (maintenance fee of $35 is charged if balance falls below  $5,000)</p>

          <h2>Features:</h2> <br />
          <p className='benefit'>⬗   Free internal fund transfers from any of your account(s)</p>
          <p className='benefit'>⬗   Account opening balance of $5,000</p>
          <p className='benefit'>⬗   Minimum interest earning balance is $8,850</p>

          <h2>Requirements:</h2> <br />
          <p className='benefit'>1 passport size colour photograph</p>
          <p className='benefit'>Valid identification - Any of the following: passport, driving license, voter’s 
          card or reputable &well-known employer’s ID</p>
          <p className='benefit'>Proof of residence - Utility bill of not more than three months old 
          (electricity, telephone, water, satellite,TV bills etc.)</p>

          <h2>Referee (any of the following):</h2> <br />
          <p className='benefit'>⬗   Account holder with us for at least the last six months.</p>
          <p className='benefit'>⬗   Reference letter from employer.</p>
          <p className='benefit'>⬗   Letter from a practicing advocate.</p>
          <p className='benefit'>⬗   For non-residents, a letter from embassy or parent firm.</p>
          <p className='benefit'>⬗   If prospective customer has a banking history, provide a six month bank 
          statement from prior bank subject to verification and confirmation.</p>
          <p className='benefit'></p>

        </div>
      </div>
    </div>
    </div>
    <HomeBannerSkndGrid />
  </div>
  )
}

export default Remittance
