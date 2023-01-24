import { Row,Col } from 'react-bootstrap'
import '../StylesFile/featureSection2.css'

export default function FeatureSection2(){

  return (
    <div className='feature__section2'>
      <div className='feature_wraper'>
        <Row>
          <Col md={12}>
            <div className='section_1'>
              <div className='title__box'>
                <h1>Do You have project in mind ? </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
              
              <div className='sec_btn'><p>Contact Us</p></div>
            </div>
          </Col>
          
        </Row>
        <Row>
          <Col md={12}>
          <div className='section_2'>
              <div className='title__boxx'>
                <h1>SOFTWARE SERVICES</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}