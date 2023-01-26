import '../StylesFile/herosection.css'
import Container from '@mui/material/Container';
import {Grid} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'



export default function HeroSection () {
  return(
    <Container maxWidth={false}>
      <div className='heroSection'>
        <div className='hero__content_wraper'>
          <div className='hero__text__box'>
            <h1>GROW YOUR BUSINESS WITH INNOVATION SOLUTION</h1>
            <p>AV experstise in providing IT Solutions for any business challanges</p>
          </div>
          <div className='play__btn'>
            <button className='circle_btn'><FontAwesomeIcon icon={faPlay} className="play__icon" /></button>
          </div>
        </div>
    </div>
    </Container>
  )
}