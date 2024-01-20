
// Bootstrap components
import Container from 'react-bootstrap/Container'

// component
import DisplayPhones from './DisplayPhones'


export default function Home() {
 
  return (
    <>
    <section id='phone-list' className='block blog-block'>
      <Container fluid>
        <h1 className='text-center bold display-2 mb-4'>Phone List</h1>
        <h5 className='subtitle text-center'>Latest Phones Avaliable</h5>
        <DisplayPhones />
      </Container>
    </section>
    </>
    
  )
}