import React from 'react'

import Header from '../Components/Home/Header'
import HeroSec from '../Components/Home/Hero_Section'
import ForthSec from '../Components/Home/Four_Section'
import FifthSec from '../Components/Home/Fifth_Section'
import FooterSec from '../Components/Home/Footer'
 



const Home = () => {
  return (
    <div>

       



      <Header />
      <HeroSec />

      <ForthSec img={'https://fedmobile.federalbank.co.in/wp-content/uploads/2020/08/UPI.png'}
        h1={'Send and Request Money Easily with CASHLESSPAY'} p={'With CASHLESSPAY, sending and requesting money is a breeze—no account required for the other person. Whether you’re splitting a dinner bill, covering travel costs, or supporting family overseas, CASHLESSPAY lets you connect with anyone on your contact list for quick, secure payments that simplify your life.'} />

      <FifthSec h1={'Experience Low-Cost Transfers in Any Global Currency'} p={'Send US dollars to SEA and ANZ regions, or any currency around the world with ease. Pay friends, family, or new connections on the go using your preferred global currency. With a stable digital US dollar backing each transaction, CASHLESSPAY minimizes currency fluctuations, providing reliable, affordable transfers wherever you are.'} img={'https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/payments/IMPS.png'} />



      <ForthSec img={'https://i0.wp.com/goniyo.com/wp-content/uploads/2024/03/niyoequitas_card.webp?fit=792%2C1024&ssl=1'}
        h1={'Spend Instantly or Withdraw to Your Bank Account'} p={'Easily use your balance anywhere Visa is accepted worldwide. Pay with Apple Pay or Google Pay for quick, contactless purchases, or transfer funds from CASHLESSPAY directly to your bank account for easy access.'} />


      <FifthSec h1={' Discover Local Businesses That Accept CASHLESSPAY'} p={'Leave cash behind. Explore local businesses that accept CASHLESSPAY and enjoy exclusive discounts for travelers. Starting in SEA and ANZ regions, with plans to expand to other popular destinations soon.'} img={'https://www.parasramindia.com/wp-content/uploads/2023/03/broker-in-india.png'} />


      <FooterSec/> 



    </div>
  )
}

export default Home