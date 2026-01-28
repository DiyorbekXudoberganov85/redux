import { useState } from 'react'
import {icon} from '../constant'
import { Input } from '../ui'
import { registerStart } from '../slice/auth'
import { useSelector, useDispatch } from 'react-redux'
const Register = () => {
  const [name, setname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const dispatch = useDispatch()  
  const {isLoading} = useSelector(state => state.auth)
  console.log(isLoading)
  const loginHendler = (e) => {
  e.preventDefault();
  dispatch(registerStart())
}
  return (
    <div className="text-center mt-5"> 
     <main className="form-signin w-25 m-auto"> 
      <form> 
        <img className="mb-4" src={icon} alt="" width="95" height="95"/> 
        <h1 className="h3 mb-3 fw-normal">Please register</h1> 
        <Input label='Username' state={name} setState={setname}/>
        <Input label='Email address' state={email} setState={setEmail}/>
        <Input label='Password' type='password' state={password} setState={setPassword}/>
              
            
        <button className="btn btn-primary w-100 py-2 mt-2" disabled={isLoading} onClick={loginHendler} type="submit">{isLoading ? 'Regitried...' : 'Registratsiya'}</button> 
           
               </form> 
               </main>
    </div>
  )
} 

export default Register
