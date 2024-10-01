import React from 'react'
import logo from '../imags/logo.svg'
import hero from '../imags/hero-bg.jpg'
const TestBody =()=> {
  return (
    <div>
      <div className='image-body'>
       <img src={hero} alt='not found ' className='img-b' />
    
      <div class="hero-content">
            <p class="hero-subtitle">MOVIES <img src={logo}/></p>
            <h1 class="h1 hero-title">
              Unlimited <strong>Movie</strong>, TVs Shows, &amp; More.
            </h1>        
            {/* <button class="btn btn-primary">
              <ion-icon name="play" role="img" class="md hydrated" aria-label="play"></ion-icon>

              <span className='btn'>Watch now</span>
            </button> */}
             <button class="custom-btn btn-12"><span>Click!</span><span>Watch now</span></button>
  </div>
          </div>
  </div>
  )
}
export default TestBody