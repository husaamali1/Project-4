import axios from 'axios'

export default function ImageUploadField({ image, setImage }){
  async function handleImageUpload(e){
    const preset = import.meta.env.VITE_UPLOAD_PRESET
    const file = e.target.files[0]
    const endpoint = import.meta.env.VITE_UPLOAD_URL
   
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', preset)
    // send form to endpoint
    const { data: { secure_url } } = await axios.post(endpoint, data)
    setImage(secure_url)
  }
  return (
    <>
        <img src={image} alt='phone-Image' style={{maxWidth: '400px', maxHeight: '600px'}}/>
        <input type='hidden' name='image' value={image} className='imageUpload'/>
        <input type='file' onChange={handleImageUpload} />
    </>
  )
}