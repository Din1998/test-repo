import '../StylesFile/about.css'
import { Row,Col } from 'react-bootstrap'

export default function About() {
  return(
    <div className='about__section'>
      <div className='wraper'>
        <Row>
            <Col md={3}><div className='box box-a'></div></Col>
            <Col md={3}><div className='box box-b'></div></Col>
            <Col md={3}><div className='box box-c'></div></Col>
            <Col md={3}><div className='box box-d'></div></Col>
        </Row>
        <Row>
            <Col md={3}><div className='box box-b'></div></Col>
            <Col md={3}><div className='box box-a'></div></Col>
            <Col md={3}><div className='box box-d'></div></Col>
            <Col md={3}><div className='box box-c'></div></Col>
        </Row>
      </div>
    </div>
  )
}