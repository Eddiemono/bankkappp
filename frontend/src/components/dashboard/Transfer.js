import React from 'react'
import './Transfer.css'
import { Link } from 'react-router-dom'

const Transfer = () => {
  return (
    <div className='transfer'>
    <Link to='/dashboard'> Go back </Link>
    <h1>Transfer Funds</h1>
    <div className='transfer_container'>
      <div className='transfer_form'>
      <input type='text' name='amount' placeholder='minimum €5000'/>
      <input type='text' name='bank' placeholder='Bank Name'/>
      <input type='text' name='anumber' placeholder='Account Number'/>
      <button>Transfer</button>
      </div>
    </div>
      
    </div>
  )
}

export default Transfer
