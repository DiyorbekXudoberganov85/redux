import { useState } from 'react'
import {icon} from '../constant'
import { Input } from '../ui'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="text-center mt-5"> 
     <main className="form-signin w-25 m-auto"> 
      <form> 
        <img className="mb-4" src={icon} alt="" width="95" height="95"/> 
        <h1 class="h3 mb-3 fw-normal">Please login</h1> 
        <Input label='Email address' state={email} setState={setEmail}/>
        <Input label='Password' type='password' state={password} setState={setPassword}/>
               <button class="btn btn-primary w-100 py-2 mt-2"  type="submit">Sign in</button> 
           
               </form> 
               </main>
    </div>
  )
}

export default Login
