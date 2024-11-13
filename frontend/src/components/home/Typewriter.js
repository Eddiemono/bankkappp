import React from 'react'
import {useTypewriter} from 'react-simple-typewriter'  
import { useAuthContext } from '../../hooks/useAuthContext'


const Typewriter = () => {

  const {users} = useAuthContext()

  const [TypeEffect] = useTypewriter({
    words: [`Welcome to Blue Vault Investment Capital !`, 'your dream bank', 'we are here to serve you'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50
  })
  return (
    <div style={{fontStyle: 'oblique'}}>
      <h6>{TypeEffect}</h6>
    </div>
  )
}

export default Typewriter
