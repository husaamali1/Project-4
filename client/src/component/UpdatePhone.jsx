import { useEffect, useState } from 'react'
import { Form, useActionData, useLoaderData, useNavigate } from 'react-router-dom'

// Component
import ImageUpload from './ImageUpload'

export default function UpdatePhone() {
  const res = useActionData()
  const navigate = useNavigate()
  const phone = useLoaderData()
  console.log(phone)
  const { id } = phone
  useEffect(() => {
    console.log(res)
    if (res?.status === 200) {
      console.log('Created Successfully!!')
      navigate(`/phones/${id}/`)
    }
  }, [res, id, navigate])

  const [image, setImage] = useState(phone.image)

  return (
    <>
      <h1 className='text-center bold display-2 mb-4'>Update phone</h1>
      <Form className='form' method='PUT'>
        <label hidden htmlFor='brand'>Brand</label>
        <input type='text' name='brand' placeholder='Brand' defaultValue={phone.brand} />
        <label hidden htmlFor='model'>Model</label>
        <input type='text' name='model' placeholder='Model' defaultValue={phone.model} />
        <label hidden htmlFor='memory'>Memory</label>
        <label hidden htmlFor='year'>Year</label>
        <input type='text' name='year' placeholder='Year' defaultValue={phone.year} />
        <label hidden htmlFor='price'>Price</label>
        <input type="text" name="price" placeholder='Price' defaultValue={phone.price} />
        <label hidden htmlFor="description">Description</label>
        <textarea name="description" placeholder='Description' defaultValue={phone.description}></textarea>
        <select name='size' id='size'>
          <option value={2}>64GB</option>
          <option value={1}>128GB</option>
          <option value={3}>256GB</option>
        </select>
        <ImageUpload image={image} setImage={setImage} />
        {res?.data.message && <p className='danger bold mt-4'>{res.data.message}</p>}
        <button className='btn btn-secondary' type='submit'>Update</button>
      </Form>
    </>
  )
}