import React from 'react'
import '../../Css/Home/Fifth.css'
 

const Fifth_Section = (props) => {
  const {h1, p, img} = props
  return (
    <>
        <div className='main-fifth'>
       <div className='fifth'>

       <div className="right-fifth-sec-item">
            <h1>{h1}</h1>
             <p>{p}</p>
         </div>

         <div className="left-fifth-sec-item">
            <img src={img} alt="" />
         </div>
        
        </div>
       </div>
    </>
  )
}

export default Fifth_Section