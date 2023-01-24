import '../StylesFile/featureSection3.css'

import {Row,Col} from 'react-bootstrap';

export default function FeatureSection3(){
  return(
 
      <div className="feature__section3">
        <div className="feature__sec_wraper">
          <div className="feature__text">
            <h1>SEE EVERYTHING ABOUT YOUR ANALYTICS VALLEY BUSINESS</h1>
          </div>
          <div className="feture__item">
            <Row>
              <Col md={3}><div className='item'>
                  <h1>100%</h1>
                  <p>Happy Client</p>
                </div></Col>
              <Col md={3}><div className='item'>
                  <h1>4.8/5</h1>
                  <p>Client Satisfaction</p>
                </div></Col>
              <Col md={3}><div className='item'>
                  <h1>150 +</h1>
                  <p>Projects Complete</p>
                </div></Col>
              <Col md={3}><div className='item'>
                  <h1>30% to 80%</h1>
                  <p>Revenue Growth</p>
                </div></Col>
            </Row>
          </div>
        </div>
      </div>

  )
}