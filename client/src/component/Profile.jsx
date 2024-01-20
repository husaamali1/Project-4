import { useLoaderData, Link } from 'react-router-dom'

// ? Bootstrap components
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import DisplayPhones from './DisplayPhones'

export default function Profile() {
  const profile = useLoaderData()
  const { username } = profile
  console.log(profile)
  return (
    <>
      <h1 className='text-center bold display-3 mb-4'>Profile</h1>
      <Container fluid className='profile'>
        <Row>
          <Col sm={12}>
            <h2>Welcome back, {username}</h2>
          </Col>
          <Col sm={8}>
            <h6>List items:</h6>
            <div className='items list'>
              {/* <DisplayPhones /> */} {/*need to be worked on */}
            </div>
          </Col>
          <Col sm={4}>
            <div className='container'>
              <button className='btn btn-outline-secondary' type='submit'>
                <Link className='List-item' to={'/phones/create/'}>List items</Link>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}