import '../StylesFile/about.css';

import Container from '@mui/material/Container';
import {Grid} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud,faChartLine,faPlay,faChartPie,faUserGroup,faShareNodes,faRobot,faMobile,faWindowRestore, faWindowClose } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  return(
    <div className='about__section'>
        <Container maxWidth={false}>
        <Grid container spacing={0.5} justifyContent="center" alignItems="center">
              <Grid item xs={12} sm={4} md={3}>
              <div className='box box-a'>
                <div className='box__text'>
                    <li><FontAwesomeIcon icon={faCloud} className="title__icon" />AWS</li>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget cum sit commodo facilisis ac pellentesque morbi justo.</p>
                    <div className="links">
                      <a href='#' className='link'>See More</a>
                    </div>
                </div> 
              </div>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
              <div className='box box-b'>
              <div className='box__text'>
                    <li><FontAwesomeIcon icon={faChartLine} className="title__icon" />AWS</li>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget cum sit commodo facilisis ac pellentesque morbi justo.</p>
                    <div className="links">
                      <a href='#' className='link'>See More</a>
                    </div>
                </div> 
              </div>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
              <div className='box box-a'>
              <div className='box__text'>
                    <li><FontAwesomeIcon icon={faChartPie} className="title__icon" />AWS</li>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget cum sit commodo facilisis ac pellentesque morbi justo.</p>
                    <div className="links">
                      <a href='#' className='link'>See More</a>
                    </div>
                </div> 
              </div>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
              <div className='box box-b'>
              <div className='box__text'>
                    <li><FontAwesomeIcon icon={faUserGroup} className="title__icon" />AWS</li>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget cum sit commodo facilisis ac pellentesque morbi justo.</p>
                    <div className="links">
                      <a href='#' className='link'>See More</a>
                    </div>
                </div> 
              </div>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
              <div className='box box-a'>
              <div className='box__text'>
                    <li><FontAwesomeIcon icon={faShareNodes} className="title__icon" />AWS</li>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget cum sit commodo facilisis ac pellentesque morbi justo.</p>
                    <div className="links">
                      <a href='#' className='link'>See More</a>
                    </div>
                </div> 
              </div>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
              <div className='box box-b'>
              <div className='box__text'>
                    <li><FontAwesomeIcon icon={faRobot} className="title__icon" />AWS</li>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget cum sit commodo facilisis ac pellentesque morbi justo.</p>
                    <div className="links">
                      <a href='#' className='link'>See More</a>
                    </div>
                </div> 
              </div>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
              <div className='box box-a'>
              <div className='box__text'>
                    <li><FontAwesomeIcon icon={faMobile} className="title__icon" />AWS</li>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget cum sit commodo facilisis ac pellentesque morbi justo.</p>
                    <div className="links">
                      <a href='#' className='link'>See More</a>
                    </div>
                </div> 
              </div>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
              <div className='box box-b'>
              <div className='box__text'>
                    <li><FontAwesomeIcon icon={faWindowRestore} className="title__icon" />AWS</li>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget cum sit commodo facilisis ac pellentesque morbi justo.</p>
                    <div className="links">
                      <a href='#' className='link'>See More</a>
                    </div>
                </div> 
              </div>
              </Grid>   
        </Grid>     
      </Container>
    </div>
  )
}