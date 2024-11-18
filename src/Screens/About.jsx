import React from 'react'
import Header from '../Components/Home/Header'
import Footer from '../Components/Home/Footer'
import A_First from '../Components/About/A_First'
import A_Fourth from '../Components/About/A_Fourth'
import A_Fifth from '../Components/About/A_Fifth'
import A_Sixth from '../Components/About/A_Sixth'
import A_Seven from '../Components/About/A_Seven'
import A_Eight from '../Components/About/A_Eight'


const About = () => {
  return (
    <>
      <div>
        <Header/>
        <A_First/>
        <A_Fifth h1={''} h31={'Our Mission'} h32={'Our Culture'} 
          p1={'We envision a world where everyone can use their money freely, without borders or restrictions. CASHLESSPAY is building a future where you can spend, save, and send funds anytime, anywhere, no matter the currency or location. We’re dedicated to making financial freedom a reality, where your money is truly yours to use however and wherever you choose. This is the world we’re creating: a place where everyone can thrive financially, unrestricted by traditional banking rules or geographic limitations.'} p2={'At CASHLESSPAY, our culture is the driving force behind our success. We’re a team of passionate and forward-thinking individuals who are committed to making a lasting impact. Our guiding principle is simple yet powerful: Passion + Action = Legacy. This unique approach fuels everything we do, pushing us to deliver innovative solutions that empower our users and shape the future of global finance.'} p3={''} img={'https://media.licdn.com/dms/image/C5612AQEp8HM7C7YVTA/article-cover_image-shrink_720_1280/0/1639396205961?e=2147483647&v=beta&t=nv43-BKovUD7ClcMdV2ZRRjxSzRV_9lePVOCrG-SJkc'}
        />

        <A_Fifth h1={'We Do Things with Passion'} h31={'We Value Ownership'} h32={'We Embrace Courage'} 
          p1={'At CASHLESSPAY, we don’t just follow instructions; we take initiative and lead by example. We believe in owning our outcomes, not just our tasks. Each team member is empowered to take responsibility, hold themselves accountable, and inspire accountability in others.'} p2={'We encourage bold thinking and open sharing of ideas. Taking risks, seeking feedback, and daring to fail are all part of our journey to learn and grow together.'} p3={'Our culture thrives on passion, ownership, and courage. These values guide us as we create products that our customers truly love.'} img={'https://st4.depositphotos.com/5653638/41797/i/450/depositphotos_417978804-stock-photo-indian-family-father-mother-son.jpg'}
        />


<A_Fifth h1={'We Like to Take Action'} h31={'We Act with Speed'} h32={'We Aim for Simplicity'} 
          p1={'At CASHLESSPAY, we’re driven to turn ideas into reality quickly. We make decisions fast, learn as we go, and expect everyone to stay committed to pushing forward.'} p2={'Our goal is to keep things simple. We reduce complexity, communicate clearly, and prioritize what matters most—delivering a seamless experience for our customers.'} p3={'Taking action with speed and simplicity is how we bring our vision to life.'} img={'https://st.depositphotos.com/2325841/2535/i/450/depositphotos_25350645-stock-photo-happy-couple.jpg'}
        />

        <A_Sixth/>
       
        <A_Eight h1={'Ready to Join the Journey?'} p={'Be a part of CASHLESSPAY’s mission to redefine global financial freedom. Let’s create a world where borders don’t limit opportunity. Join us on this exciting journey!'} btn={'Join the team'}/>
        <Footer/>
    
      
      </div>
    </>
  )
}

export default About