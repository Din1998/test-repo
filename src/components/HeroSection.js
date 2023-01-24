import '../StylesFile/herosection.css'
import { Container } from 'react-bootstrap'



export default function HeroSection () {
  return(
    <Container fluid>
      <div className='heroSection'>
       
        <div className='hero__content_wraper'>
          <div className='hero__text__box'>
            <h1>GROW YOUR BUSINESS WITH INNOVATION SOLUTION</h1>
            <p>AV experstise in providing IT Solutions for any business challanges</p>
          </div>
          <div className='play__btn'>
            <div className='circle'>Play</div>
          </div>
        </div>
        
     
    </div>
    </Container>
  )
}