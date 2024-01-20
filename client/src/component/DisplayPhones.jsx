import Col from 'react-bootstrap/Col'
import Row from  'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import { Link, useLoaderData} from 'react-router-dom'

export default function DisplayPhones(){
  const phones = useLoaderData()
  console.log(phones)
  return (
    <Row>
      {phones && phones.map(phone => {
        const {id, brand, model, image, price, year } = phone
        return (
          <Col sm={12} md={6} lg={3} className='mb-4' key={id}>
            <div className='holder'>
              <Card className='h-100'>
                <h4>{brand}</h4>
                <h6>{model}</h6>
                <h6>{year}</h6>
                <p>£{price}</p>
                 <Link to={`/phones/${id}/`} className='stretched-link'> 
                  <Card.Img variant='top' src={image} className='card-img' />
                </Link>
              </Card>
            </div>
          </Col>
        )
      })}
    </Row>
  )
}