import React, { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {

  const [error, setError] = useState(null)

  const [isLoading, setIsLoading] = useState(null)

  const {dispatch} = useAuthContext()

  const navigate = useNavigate()


  const login = async(email, password, balance) => {
    setIsLoading(true)
    setError(null)

      try {
        const {data} = await axios.post('/api/user/login', {  
          email,
          password,
          balance
        });
        console.log(data);

        if (data.success === true){
          window.location.replace('/dashboard')
          // navigate('/profile')
          if (window !== 'undefined') {
              localStorage.setItem('token', JSON.stringify(data))
          } 

          dispatch({type: 'LOGIN', payload: data})
          setIsLoading(false)
        }
      } catch (error) {
        
      }
    }
  return {login, isLoading, error}
}


