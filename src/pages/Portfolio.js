import React from 'react'

const styles = {
  h2: {
    fontSize: '50px'
  },
  h5: {
    fontSize: '40px'
  },
  link: {
    color: 'goldenrod',
    fontSize: '20px'
  },
}

const Portfolio = () => {
  return (
    <div className='container-fluid' style={styles.container}>

      <div className='p-4 d-flex justify-content-center'><h2 style={styles.h2}>Portfolio</h2></div>

      <div className='row row-cols-1 row-cols-md-2'>

        <div className='col mb-4'>

          <div className='card'>

            <img className="card-img-top" src={require('../images/spiritslisted.png')} alt="Spirits Listed"/>

            <div className='card-body d-flex-column'>

              <h5 className='card-title d-flex justify-content-center' style={styles.h5}>Spirits Listed</h5>

              <a href="https://nicklthompson.github.io/Spirits-Listed/" className='spiritsListedSite link d-flex justify-content-center' style={styles.link}>Live Site</a>
              <a href="https://github.com/NickLThompson/Spirits-Listed" className='spiritsListedRepo link d-flex justify-content-center' style={styles.link}>GitHub Repository</a>

            </div>
          </div>
        </div>
        <div className='col mb-4'>

          <div className='card'>

            <img className="card-img-top" src={require('../images/trailblazers.PNG')} alt="Trailblazers"/>

            <div className='card-body d-flex-column'>

              <h5 className='card-title d-flex justify-content-center' style={styles.h5}>Trailblazers</h5>

              <a href="https://intense-fjord-45584.herokuapp.com/" className='trailblazersSite link d-flex justify-content-center' style={styles.link}>Live Site</a>

              <a href="https://github.com/mycancel/trailblazers" className='trailblazersRepo link d-flex justify-content-center' style={styles.link}>GitHub Repository</a>

            </div>
          </div>
        </div>
        <div className='col mb-4'>

          <div className='card'>
          
            <img className="card-img-top" src={require('../images/workdayscheduler.png')} alt="Work Day Scheduler"/>

            <div className='card-body d-flex-column'>

              <h5 className='card-title d-flex justify-content-center' style={styles.h5}>Work Day Scheduler</h5>

              <a href="https://grilledcheeseplease.github.io/Work-Day-Scheduler/" className='workDaySchedulerSite link d-flex justify-content-center' style={styles.link}>Live Site</a>

              <a href="https://github.com/grilledcheeseplease/Work-Day-Scheduler" className='workDaySchedulerRepo link d-flex justify-content-center' style={styles.link}>GitHub Repository</a>

            </div>
          </div>
        </div>
        <div className='col mb-4'>

          <div className='card'>

            <img className="card-img-top" src={require('../images/socialnetworkapi.png')} alt="Social Network API"/>

            <div className='card-body d-flex-column'>

              <h5 className='card-title d-flex justify-content-center' style={styles.h5}>Social Network API</h5>

              <a href="https://www.awesomescreenshot.com/video/10031928?key=ed8afb3e7c14ca0567d16f1175a6707c" className='snapiVideo link d-flex justify-content-center' style={styles.link}>Video Walkthrough</a>

              <a href="https://github.com/grilledcheeseplease/Social-Network-API" className='snapiRepo link d-flex justify-content-center' style={styles.link}>GitHub Repository</a>

            </div>
          </div>
        </div>
        <div className='col mb-4'>

          <div className='card'>

            <img className="card-img-top" src={require('../images/ecommercebackend.png')} alt="E-Commerce Back-End"/>

            <div className='card-body d-flex-column'>

              <h5 className='card-title d-flex justify-content-center' style={styles.h5}>E-Commerce Back-End</h5>

              <a href="https://www.awesomescreenshot.com/video/9742723?key=6d9e2df26b921940f931a1dcb04376fe" className='ecbeVides link d-flex justify-content-center' style={styles.link}>Video Walkthrough</a>

              <a href="https://github.com/grilledcheeseplease/E-commerce-Back-End" className='ecbeRepo link d-flex justify-content-center' style={styles.link}>GitHub Repository</a>

            </div>
          </div>
        </div>
        <div className='col mb-4'>

          <div className='card'>

            <img className="card-img-top" src={require('../images/weatherdashboard.png')} alt="Weather Dashboard"/>

            <div className='card-body d-flex-column'>

              <h5 className='card-title d-flex justify-content-center' style={styles.h5}>Weather Dashboard</h5>

              <a href="https://grilledcheeseplease.github.io/Weather-Dashboard/" className='weatherSite link d-flex justify-content-center' style={styles.link}>Live Site</a>

              <a href="https://github.com/grilledcheeseplease/Weather-Dashboard" className='weatherRepo link d-flex justify-content-center' style={styles.link}>GitHub Repository</a>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio