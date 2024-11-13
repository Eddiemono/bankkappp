import React, { useState } from 'react'
import './CSS/Loginsignup.css'
import { useSignup } from '../hooks/useSignup'
import { useLogin } from '../hooks/useLogin'
import backgroundImage from '../assets/onlinbank.png'
import { useNavigate } from 'react-router-dom'


const LoginSignup = () => {

  const [state, setState] = useState('Log In')

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState()

  const handleImage = (e) => {
    console.log(e.target.files);
    
    setFile(URL.createObjectURL(e.target.files[0]))
  }


  const {signup, error, isLoading} = useSignup()
  const {login} = useLogin()

  const Login = async() => {

    await login(email, password)
    console.log('Login function clicked', email, password);
    // window.location.replace('/profile')
    alert('Go to your account')
    // navigate('/dashboard')
    window.location.replace('/dashboard')
  }

  const Signup = async() => {
    
    await signup(name, email, password)
    console.log('Signup function clicked', name, email, password);
    
    setName('')
    setEmail('')
  setPassword('')
  }


  return (
    <div className='loginsignup'>
    <div className='background'>
      <img src={backgroundImage} alt=''/>
    </div>
      
      <div className='LoginSignup_form'>
      
      <b>{state}</b>
      {state==='Signup'?
      <input type='text' name='name' value={name} placeholder='Enter Name...' onChange={(e) => setName(e.target.value)}/>
      :<></>}

      
      <input type='email' name='email' value={email} placeholder='Enter Email...' onChange={(e) => setEmail(e.target.value)}/>
      

        <input type='password' name='password' value={password} placeholder='Enter Password...' onChange={(e) => setPassword(e.target.value)}/>
        
        {/* <input type='file' onChange={handleImage}/>
        <img src={file} alt=''/> */}

        <button disabled={isLoading} onClick={() => {state==='Log In'?Login():Signup()}}>LOGON</button>
        
        {
        state==='Signup'?<p className='loginsignup_login'>Already have an account? <span onClick={() => setState('Log In')}>Login here</span></p>
        :
      <p className='loginsignup_login'><b>Create an account</b> <span onClick={() => setState('Signup')}><b>Click here</b></span></p>
      }

      {error && <div className='error'>{error}</div>}
      </div>
    </div>
  )
}

export default LoginSignup;
