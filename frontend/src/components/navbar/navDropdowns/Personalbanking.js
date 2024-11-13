import React, {useRef, useState} from 'react'
import './Personalbanking.css'
import { Link } from 'react-router-dom'

const Personalbanking = () => {

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
    <Link ref={linkRef} onClick={() => setOpen(!open)}>Personal Banking</Link>

    {open && 
      <div  ref={menuRef} className='menu mt-1'>
      <a href='/account-types'>Bank Account</a>
      <a href='/investment'>Investment</a>
      <a href='/remittance'>Remittance</a>
    
    </div>
    }
    
    </div>
    
  )
}

export default Personalbanking
