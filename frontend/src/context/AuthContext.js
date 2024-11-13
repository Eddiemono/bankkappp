import React, {createContext, useState, useEffect, useReducer} from 'react'


export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch(action.type){
    case 'LOGIN': return {user: action.payload}
    case 'LOGOUT': return {user: null}
    default: return state
  }
}

const AuthContextProvider = ({children}) => {
  
  const [state, dispatch] = useReducer(authReducer, {
    user: null
  })

  const [users, setUsers] = useState([])

  useEffect(() => {
    
    fetch('/api/user/me', {
       method: 'GET',
      'credentials': 'include',
      headers:{
        Accept: 'application/form-data',
        'Content-Type': 'application.json',
      },
    })
    .then(res => {
    return res.json()
    })
    .then(result => {
      console.log(result);
      setUsers(result.user)
      })
      .catch(error => {
        console.log(error);
      })

      const user = JSON.parse(localStorage.getItem('token'))
      if(user){
        dispatch({type: 'LOGIN', payload: user})
        localStorage.getItem('token')
      }
    
  },[]
);

  console.log('AuthContext state', state);

  return (
    <AuthContext.Provider value={{...state, dispatch, users}}>
        {children}
    </AuthContext.Provider>
      
    
  )
}

export default AuthContextProvider
