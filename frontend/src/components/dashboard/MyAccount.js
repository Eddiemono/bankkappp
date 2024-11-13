import React from 'react'
import './MyAccount.css'
import { useAuthContext } from '../../hooks/useAuthContext'
import moneysecurity from '../../assets/eurosec.png'

const MyAccount = () => {

  const {users} = useAuthContext()
  console.log(users);
  
  return (
    <div className='profile'>
    <img src={moneysecurity} alt='' />
    <h1>Account Summary</h1>
    <div className='profile_container'>
    <div className='profile_balance'>
    <p>
    Actual Balance: Euro(€)4,508.00 <br />
    Available Balance: Euro(€)4,500.30 <br />
    </p>
      <div className='profile_info'>
      <div className='name'>Name: Eddie Mono {users.name}</div>
      <div className='name2'>Account Type: Investment{users.email}</div>
      <div className='name'>Account Number: 4285799144{users.anumber}</div>
      </div>
    </div>
        <section className='status'>
          <p>Status: <span>Active</span></p>
        </section>
    </div>
      
    </div>
  )
}

export default MyAccount
