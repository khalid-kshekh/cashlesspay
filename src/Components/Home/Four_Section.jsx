import React from 'react'
import '../../Css/Home/Forth.css'
// import Img from '../assets/blaze videos/show-1.png'

const Four_Section = (props) => {
   const {img, h1, p} = props;
  return (
    <>
       <div className='main-forth'>
       <div className='forth'>
         <div className="left-four-sec-item">
            {/* <video   autoPlay muted loop playsInline src="https://blaze.money/videos/blaze-pay-search.mp4"></video> */}
            <img src={img} alt="" />
         </div>
         <div className="right-four-sec-item">
            <h1>{h1}</h1>
             <p>{p}</p>
         </div>
        </div>
       </div>
    </>
  )
}

export default Four_Section