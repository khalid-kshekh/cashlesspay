import React from 'react'
import '../../Css/About/A_Eight.css'

const A_Eight = (props) => {
  const {h1,p,btn} =props
  return (
    <div className='a-eight'>
        <div className='a-main-eight'>
            <div className='a-eight-item'>
            <h1>{h1}</h1>
                <p>{p}</p>
                <button>{btn}</button>
            </div>
        </div>
    </div>
  )
}

export default A_Eight