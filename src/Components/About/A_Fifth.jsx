import React from 'react'
import '../../Css/About/A_Fifth.css'

const A_Fifth = (props) => {
  const {h1,h31,h32,p1,p2,p3,img}= props
  return (
    <div className='a-fifth'>
    <div className='a-main-fifth'>
        <div className='a-first-fifth-part'>
             <div className='a-first-fifth-handing'>
             <h2>{h1}</h2> 
             </div> 
             <div className='a-first-fifth-paragraph'>
                <h3>{h31}</h3>
                <p>{p1}</p>
                <h3>{h32}</h3>
                <p> {p2}</p>
                <p>{p3}</p>
             </div>              
        </div>
        <div className='a-second-fifth-part'>
            <img src={img} alt="" />
        </div>
    </div>
</div>
  )
}

export default A_Fifth