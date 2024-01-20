import axios from 'axios'
import { getToken } from '../helpers/common'

export async function getAllPhones() {
  const { data } = await axios('/api/phones/')
  return data
}

export async function getSinglePhone(id) {
  const { data } = await axios.get(`/api/phones/${id}/`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
  return data
}


export async function getProfile() {
  const { data } = await axios.get('/api/auth/profile/', {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
  return data
}