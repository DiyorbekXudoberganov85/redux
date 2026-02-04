import {Link , useNavigate } from 'react-router-dom'
import {logo} from '../constant'
import { useSelector } from 'react-redux'
import { removeItem } from '../helpers/persistencs-storege'
import {logoutUser} from '../slice/auth'
import { useDispatch } from 'react-redux'
const Navbar = () => {
  const dispatch = useDispatch()
  const {loggedIn , user} = useSelector(state => state.auth)


  const navigate = useNavigate()

  const logoutHendler = () =>{
    dispatch(logoutUser())
    removeItem('token')
    navigate('/login')

  }


  return (
     <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
      <Link to="/"> 
        <img src={logo} alt="logo" width={150} />
      </Link>
         <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          
          {loggedIn ? (
            <>
              <p className='me-3 py-2 m-0 link-body-emphasis text-decoration-none'>{user.username}</p>
              <button className='btn btn-outline-danger' onClick={logoutHendler}>Log Out</button>
             
            </>

          
          ) :( 
          
            <><Link className="me-3 py-2 link-body-emphasis text-decoration-none" to="/register">
            Register
          </Link>
          <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to="/login">
            Login
          </Link>

          
          </>
          )}
          
          
            </nav> 
      </div>

  )
}

export default Navbar

