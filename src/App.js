import {Route , Routes} from 'react-router-dom';
import { Main  , Login ,Register, Navbar} from './components';
import AuthService from './service/auth';
import { useEffect } from 'react';
import { signUserSuccess } from './slice/auth';
import { useDispatch } from 'react-redux';
import {getItem} from './helpers/persistencs-storege'
import ArticlesServise from './service/articles';
import { getArticlesStart, getArticlesSuccess } from './slice/articles';
const App = () => {
const dispatch = useDispatch();
const getUser = async () => {


try{
const response = await AuthService.getUser();
dispatch(signUserSuccess(response.user))
console.log(response)
}catch(error){
  console.log(error)
}
}



const getArticles = async() => {
  dispatch(getArticlesStart())
  try{
    const response = await ArticlesServise.getArticles();
    console.log(response)
    dispatch(getArticlesSuccess(response.articles))
  }catch(error){
    console.log(error)
  }
}

useEffect(() => {
  const token = getItem('token')
  if (token){
    getUser()
  }
  getArticles()
  
} ,[])
  return (
    <div>
      <Navbar />
     <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
     </Routes>
    </div>
  )
}

export default App




