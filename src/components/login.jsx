import { useState , useEffect } from 'react'
import {icon} from '../constant'
import { Input } from '../ui'
import { useSelector, useDispatch } from 'react-redux'
import {signUserStart , signUserSuccess ,signUserFailure} from '../slice/auth'
import AuthService from '../service/auth'
import {ValidationError} from './'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()  
  const {isLoading , loggedIn} = useSelector(state => state.auth)
  const navigate = useNavigate()
  const loginHendler = async e => {
  e.preventDefault();
  dispatch(signUserStart())
  const user = {
    email,
    password
  }
  try {
  const response = await AuthService.userLogin(user)
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
        <h1 className="h3 mb-3 fw-normal">Please login</h1> 
        <ValidationError />
        <Input label='Email address' state={email} setState={setEmail}/>
        <Input label='Password' type='password' state={password} setState={setPassword}/>
        <button className="btn btn-primary w-100 py-2 mt-2" disabled={isLoading} onClick={loginHendler} type="submit">{isLoading ? 'Loading...' : 'Login'}</button> 
           
               </form> 
               </main>
    </div>
  )
}

export default Login
