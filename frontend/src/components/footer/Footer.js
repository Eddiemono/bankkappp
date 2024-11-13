import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_items'>
      <div className='footer_items_container'>
      <h1>Blue Vault Financial Security</h1>
      <p>To provide domestic and international banking services with a strategic focus on project financing, trade 
      financing, export development, and SME financing.</p>
      </div>

      <div className='footer_items_container'>
      <h1>PRODUCTS</h1>
      <a href='/card'>Cards</a>
      <a href='/remittance'>Remittance</a>
      <a href='/enterprise'>Enterprise Account</a>
      <a href='/treasury'>Treasury Services</a>
      </div>

      <div className='footer_items_container'>
      <h1>USEFUL LINKS</h1>
      <a href='/'>Home</a>
      <a href='/about'>About us</a>
      <a href='/investment'>Investment</a>
      <a href='/loginsignup'>Internet banking</a>
      </div>

      <div className='footer_items_container'>
      <h1>CONTACT</h1>
      <p>30 Upper Tachbrook St <br/>Fremont, CA, USA.</p>
      <p>info@bluevaultfinsecurity.com <br/> +1 7375 228398</p>
      </div>
      
      </div>

      <div className='copyright'>
      <p>Copyright &copy; 2024 Blue Vault Financial Security</p>
      </div> 


    </div>
  )
}

export default Footer
