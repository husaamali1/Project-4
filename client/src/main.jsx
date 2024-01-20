// * Imports
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// * Style
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/main.scss'

// Page components
import App from './App'
import Home from './component/Home'
import PhoneSingle from './component/PhoneSingle'
import PhoneCreate from './component/PhoneCreate'
import UpdatePhone from './component/UpdatePhone'
import Register from './component/Register'
import Login from './component/Login'
import Profile from './component/Profile'


// Loaders
import { getAllPhones, getProfile, getSinglePhone } from './utils/loaders/phone'

// Actions
import { loginUser, registerUser } from './utils/actions/auth'
import { createPhone, updatePhone, deletePhone } from './utils/actions/phone'
import ErrorPage from './component/ErrorPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: getAllPhones,
      },
      {
        path: '/phones/:phoneId/',
        element: <PhoneSingle />,
        loader: async ({ params }) => getSinglePhone(params.phoneId),
        action: async ({ params }) => deletePhone(params.phoneId)
      },
      {
        path: '/phones/create/',
        element: <PhoneCreate />,
        action: async ({ request }) => createPhone(request)
      },
      {
        element: <UpdatePhone />,
        path: '/phones/:phoneId/edit/',
        action: async({ request, params }) => updatePhone(request, params.phoneId),
        loader: async ({ params }) => getSinglePhone(params.phoneId)

      },
      {
        element: <Profile />,
        path: '/auth/profile/',
        loader: async ({ params }) => getProfile(params.phoneId)
      },
      {
        path: '/auth/register/',
        element: <Register />,
        action: async ({ request }) => registerUser(request)
      },
      {
        path: '/auth/login/',
        element: <Login />,
        action: async ({ request }) => loginUser(request)
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)