// * Imports
import { Link, useNavigate } from 'react-router-dom'

// helper 
import { activeUser, removeToken } from '../utils/helpers/common'

// Images
import logo from '../images/logo.png'



export default function Nav() {
const navigate = useNavigate()
console.log(activeUser())
  
function logOut() {
    removeToken()
    navigate('/auth/login/')
  }

  return (
    <>
      <header className=' navbar p-2 p-md-3 p-lg-4'>
        <img className='logo rounded-circle d-inline-block align-top' style={{ width: '110px', paddingLeft: '10px' }} src={logo} alt='brand logo' />
          <ul className='nav nav-underline'>
          <li className='nav-item'>
            <Link to='/' className='nav-link' aria-current='page'>Home</Link>
          </li>
        {activeUser() ?
          <>
          <li className='nav-item'>
            <Link to='/auth/profile/' className='nav-link'>Profile</Link>
          </li>
            <span className='nav-link' type='submit' onClick={logOut}>Log out</span>
          </>
          :
          <>
            <li className='nav-item'>
              <Link to='/auth/Register/' className='nav-link'>Sign Up</Link>
            </li>
            <li className='nav-item'>
              <Link to='/auth/login/' className='nav-link'>Login</Link>
            </li>
          </>
        }
        </ul>
      </header>
    </>
  )
}

