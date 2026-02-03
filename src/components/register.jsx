import { useEffect, useState } from 'react'
import {icon} from '../constant'
import { Input } from '../ui'
import { signUserStart ,signUserSuccess , signUserFailure} from '../slice/auth'
import { useSelector, useDispatch } from 'react-redux'
import AuthService from '../service/auth'
import { useNavigate } from 'react-router-dom'
import {ValidationError} from './'
const Register = () => {
  const [name, setname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()  
  const {isLoading , loggedIn} = useSelector(state => state.auth)
  const registerHendler = async e => {
  e.preventDefault();
  dispatch(signUserStart())
  const user = {
    username: name,
    email,
    password
  }
  try { 
    const response = await AuthService.userRegister(user)
   dispatch(signUserSuccess(response.user))
    navigate('/')
  } catch (error) {
    
    dispatch(signUserFailure(error.response.data))
  }
}

useEffect(() => { 
  if(loggedIn){
    navigate('/')
  }
} ,[])



  return (
    <div className="text-center mt-5"> 
     <main className="form-signin w-25 m-auto"> 
      <form> 
        <img className="mb-4" src={icon} alt="" width="95" height="95"/> 
        <h1 className="h3 mb-3 fw-normal">Please register</h1> 
        <ValidationError />
        <Input label='Username' state={name} setState={setname}/>
        <Input label='Email address' state={email} setState={setEmail}/>
        <Input label='Password' type='password' state={password} setState={setPassword}/>
              
            
        <button className="btn btn-primary w-100 py-2 mt-2" disabled={isLoading} onClick={registerHendler} type="submit">{isLoading ? 'Regitried...' : 'Registratsiya'}</button> 
               </form> 
               </main>
    </div>
  )
} 

export default Register
