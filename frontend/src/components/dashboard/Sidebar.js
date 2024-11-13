import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/transfer'} style={{textDecoration: 'none'}}>
      <div className='sidebar_item'>
      <p>Transfer/Withdraw</p>
      </div>
    </Link>

    {/* <Link to={'/bank'} style={{textDecoration: 'none'}}>
      <div className='sidebar_item'>
      <p>Withdraw</p>
      </div>
    </Link> */}
    </div>
  )
}

export default Sidebar
