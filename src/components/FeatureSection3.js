import '../StylesFile/featureSection3.css'

import {Container,Row,Col} from 'react-bootstrap';

export default function FeatureSection3(){
  return(
      <div className="feature__section3">
        <Container>
        <div className="feature__wraper3">

          <div className="feature3__text">
            <h1>SEE EVERYTHING ABOUT YOUR ANALYTICS VALLEY BUSINESS</h1>
          </div>

          <div className="feture__item3">
          <Row>
            <Col md={3} sm={6}><div className='item1'>
                <h1>100%</h1>
                <p>Happy Client</p>
              </div></Col>
            <Col md={3} sm={6}><div className='item1'>
                <h1>4.8/5</h1>
                <p>Client Satisfaction</p>
              </div></Col>
            <Col md={3} sm={6}><div className='item1'>
                <h1>150 +</h1>
                <p>Projects Complete</p>
              </div></Col>
            <Col md={3} sm={6}><div className='item1'>
                <h1>30% <span className='span__text'>to</span> 80%</h1>
                <p>Revenue Growth</p>
              </div></Col>
          </Row>
          </div>
          </div>
        </Container>
      </div>

  )
}