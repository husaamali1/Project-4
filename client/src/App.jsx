// * Imports
import { Outlet, useNavigation } from 'react-router-dom'

// ? Components
import Nav from './component/Nav'
import Footer from './component/Footer'

import Spinner from 'react-bootstrap/Spinner'


function App() {

  const navigation = useNavigation()

  return (
    <>
      <Nav />
      <main>
        {
          navigation.state === 'idle' ?
            <Outlet />
            :
            <div className='spinner'>
              <Spinner animation='border' />
            </div>
        }
      </main>
      <Footer />
    </>
  )
}

export default App
