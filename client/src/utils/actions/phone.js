import axios from 'axios'
import { formToObj, getToken } from '../helpers/common'
import { redirect } from 'react-router-dom'

export async function createPhone(request){
  const data = await formToObj(request)
  console.log(data)
  return await axios.post('/api/phones/', data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
} 

export async function updatePhone(request, id){
  const data = await formToObj(request)
  return await axios.put(`/api/phones/${id}/`, data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
} 

export async function deletePhone(id){
  await axios.delete(`/api/phones/${id}/`, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
  return redirect ('/')
} 