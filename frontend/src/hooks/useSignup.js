import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import axios from 'axios'

export const useSignup = () => {

  const [error, setError] = useState(null)

  const [isLoading, setIsLoading] = useState(null)

  const {dispatch} = useAuthContext()

  const signup = async(name, email, password) => {
    setIsLoading(true)
    setError(null)

      try {
        const {data} = await axios.post('/api/user/signup', {  
          name,
          email,
          password
        });
        console.log(data);

        if (data.success === true){
          window.location.replace('/loginsignup')
          if (window !== 'undefined') {
              localStorage.setItem('token', JSON.stringify(data))
          } 

          dispatch({type: 'LOGIN', payload: data})
          setIsLoading(false)
        }
      } catch (error) {
        
      }
    }
  return {signup, isLoading, error}
}


