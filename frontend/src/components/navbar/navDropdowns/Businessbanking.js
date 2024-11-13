import React, {useRef, useState} from 'react'
import './Personalbanking.css'
import { Link } from 'react-router-dom'

const Businessbanking = () => {

  const [open, setOpen] = useState()

  const menuRef = useRef()
  const linkRef = useRef()

  window.addEventListener('click', (e) => {
    if(e.target !== menuRef.current && e.target !== linkRef.current){
      setOpen(false)
    }
    
  })


  return (
    <div className='not_open'>
    <Link ref={linkRef} onClick={() => setOpen(!open)}>Business Banking</Link>

    {open && 
      <div  ref={menuRef} className='menu mt-1'>
      <a href='/commercial'>Commercial Bank Account</a>
      <a href='/enterprise'>Enterprise Account</a>
      <a href='/investment'>Savings & Investment</a>
      <a href='/treasury'>Treasury Services</a>
      <a href='/card'>Cards</a>
    
    </div>
    }
    
    </div>
  )
}

export default Businessbanking
