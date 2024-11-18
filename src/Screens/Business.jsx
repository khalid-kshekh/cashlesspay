import React from 'react'
import Header from '../Components/Home/Header'
import Footer from '../Components/Home/Footer'
import B_Hero from '../Components/Business/B_Hero'
import B_SecondSec from '../Components/Business/B_SecondSec'
import Handing from '../Components/Business/Handing'
import B_TheredSec from '../Components/Business/B_ThredSec'
import B_FortSec from '../Components/Business/B_FourtSec'
import B_FifthSec from '../Components/Business/B_Fifth'
import B_Sixth from '../Components/Business/B_Sixth'
import Fifth from '../Components/Home/Fifth_Section'
import Fourth from  '../Components/Home/Four_Section'

const Business = () => {
  return (
    <>
         <div>
        <Header/>
      
        
          <B_Hero/>
          <B_SecondSec/>
       
         
          {/* <Handing/> */}
          <Fifth h1={'Global Reach with a Local Touch'} p={'Enhance conversions and streamline your business with global pay-ins and pay-outs. Our payment solution is designed to support your growth, empowering your business to thrive on a global scale while providing a seamless local experience.'} img={'https://plus.unsplash.com/premium_photo-1661758211006-d41106e4be4d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D'}/>
           
           
         
          <Fourth img={'https://images.ctfassets.net/pdf29us7flmy/1OY6V5qnB5e490hm3lTK2i/c490cc85b117b64bc5ac10f0b9d6f1a4/GOLD-6487-CareerGuide-Batch04-Images-GraphCharts-04-Histogram.png?w=720&q=100&fm=jpg'} h1={'Boost Sales with CASHLESSPAY'} p={'Reach a loyal community of millions who choose CASHLESSPAY as their preferred payment method, helping you grow your sales and customer base effortlessly.'}/> 

          {/* <B_FortSec/> */}
    
          <B_FifthSec/>
          <B_Sixth/>
        
        <Footer/>
        </div>
         
    </>
  )
}

export default Business