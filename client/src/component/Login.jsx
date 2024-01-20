import { useEffect } from 'react'
import { Form, useActionData, useNavigate } from 'react-router-dom'
import { setToken } from '../utils/helpers/common'


// ? Login
export default function Login(){
  const res = useActionData()
  const navigate = useNavigate()

  useEffect(() => {
    if (res?.status === 200){
      setToken(res.data.access)
      console.log(res.data.acess)
      navigate('/')
    }
  }, [res, navigate])

  return (
    <>
    <h1 className='text-center bold display-3 mb-4'>Login</h1>
    <Form className='form' method='POST'>
      <input type='username' name='username' placeholder='Username'/>
      <input type='password' name='password' placeholder='Password'/>
      <button className='btn btn-outline-secondary' type='submit'>Login</button>
    </Form>
    </>
  )
}