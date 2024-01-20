import { useLoaderData, Link, useActionData, useNavigate, Form } from 'react-router-dom'
import { useEffect } from 'react'
import { activeUser } from '../utils/helpers/common'


export default function PhoneSingle() {
  const phone = useLoaderData()
  console.log(phone)
  const { id, brand, model, image, year, description, price, size } = phone
  const res = useActionData()
  const navigate = useNavigate()
  useEffect(() => {
    console.log(res)
    if (res?.status === 202) {
      console.log('CREATED SUCCESSFULLY')
      navigate('/')
    }
  }, [res, navigate])
  console.log(activeUser())
  
  return (
    <>
      <h1 className='text-center bold display-3 mb-4'>Single Phone</h1>
      <div className='single-conatiner'>
        <div key={id}>
          <h1>{brand}</h1>
          <h2>{model}</h2>
          <img src={image} className='image' />
          <h4>{year}</h4>
          <h4>{size}</h4>
          <p>{description}</p>
          <h3>£{price}</h3>
        </div>
        <div className='buttons'>
          <Link to={`/phones/${id}/edit/`}>
            <button className='btn btn-outline-secondary' type='submit'>Edit</button>
          </Link>
          <Form method='DELETE'>
            <button className='btn btn-outline-secondary' type='submit'>Delete</button>
          </Form>
        </div>
      </div>
    </>
  )
}