import '../StylesFile/featureSection3.css'

import Container from '@mui/material/Container';
import {Grid} from '@mui/material'

export default function FeatureSection3(){
  return(
      <div className="feature__section3">
        <Container  maxWidth="lg">
          <div className="feature__wraper3">
            <div className="feature3__text">
              <h1>SEE EVERYTHING ABOUT YOUR ANALYTICS VALLEY BUSINESS</h1>
            </div>
            <div className="feture__item3">
            <Grid  container spacing={0.5} justifyContent="center" alignItems="center">
              <Grid item xs={12} sm={4} md={3}><div className='item1'>
                  <h1>100%</h1>
                  <p>Happy Client</p>
                </div></Grid>
              <Grid item xs={12} sm={4} md={3}><div className='item1'>
                  <h1>4.8/5</h1>
                  <p>Client Satisfaction</p>
                </div></Grid>
              <Grid item xs={12} sm={4} md={3}><div className='item1'>
                  <h1>150 +</h1>
                  <p>Projects Complete</p>
                </div></Grid>
              <Grid item xs={12} sm={4} md={3}><div className='item1'>
                  <h1>30% <span className='span__text'>to</span> 80%</h1>
                  <p>Revenue Growth</p>
                </div></Grid>
            </Grid>
            </div>
          </div>
        </Container>
        
      </div>

  )
}