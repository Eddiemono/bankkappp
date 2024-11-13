import React, {useRef} from 'react'
import './Navbar.css'
import Personalbanking from './navDropdowns/Personalbanking';
import Businessbanking from './navDropdowns/Businessbanking';
import { useAuthContext } from '../../hooks/useAuthContext';
import axios from 'axios';


const Navbar = () => {

  const {users} = useAuthContext()

  const logout = async() => {
  await axios.post('/api/user/logout')
  window.location.replace('/')
  }

const navRef = useRef();

  const showNavbar = (e) => {
    navRef.current.classList.toggle('responsive_nav');
    }

return (
    <div className='navbar'>
      <header className='fixed-top'>
      <div className='logo'>
      <h2>Blue Vault Financial Security</h2>
      {users?<a href='/'>Welcome {users.name}!</a>:<></>}
        
      </div>
        <div className='nav_items'>
        <nav ref={navRef}>
      <a href='/'>Home</a>

      <a href='/about'>About</a>
      
      <a href='/contact'>Contact Us</a>
      
      <div><Personalbanking /></div>

      <div><Businessbanking /></div> 

      <a href='/dashboard'>Dashboard</a>
      
      {users? <button className='logout_button' onClick={() => logout()}>Logout</button> : <a href='/loginsignup'>Login</a>}
      

      <button className='nav-btn nav-close-btn'  onClick={showNavbar}>X</button>
      </nav>

    </div>
      
      <button className='nav-btn' onClick={showNavbar}>=<span>=</span></button>

      </header>
    </div>
  )
}

export default Navbar
