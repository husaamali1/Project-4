import { useEffect, useState } from 'react'
import { Form, useActionData, useNavigate } from 'react-router-dom'
import ImageUploadField from './ImageUpload'

export default function Phonecreate() {
  const res = useActionData()
  const navigate = useNavigate()

  const [ image, setImage ] = useState('')

  useEffect(() => {
    console.log(res)
    if(res?.status === 201){
      console.log('Created succesfully')
      navigate(`/phones/${res.data.id}/`)
    } 
  }, [res, navigate])

  return (
    <>
      <h1 className='text-center bold display-3 mb-4'>List Your Phone</h1>`
      <Form className='form' method='POST'>
      <label hidden htmlFor="brand">Brand</label>
        <input type="text" name="brand" placeholder='brand' />
        <label hidden htmlFor="model">Model</label>
        <input type="text" name="model" placeholder='Model' />
        <label hidden htmlFor='memory'>Memory</label>
        <label hidden htmlFor="year">Year</label>
        <input type="text" name="year" placeholder='Year' />
        <label hidden htmlFor="price">Price</label>
        <input type="number" name="price" placeholder='Price' />
        <label hidden htmlFor="description">Description</label>
        <textarea name="description" placeholder='Description'></textarea>
        <select name='size' id='size'>
          <option value={2}>64GB</option>
          <option value={1}>128GB</option>
          <option value={3}>256GB</option>
        </select>
       <ImageUploadField image={image} setImage={setImage} />
        {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
        <button className="btn btn-outline-secondary" type="submit">Create</button>
      </Form>
    </>
  )
}