import React from 'react'
import Header from '../Components/Home/Header'
import Footer from '../Components/Home/Footer'
import C_Hero from '../Components/Careere/C_Hero'
import C_Firsth from '../Components/Careere/C_Firsth'
import C_Video from '../Components/Careere/C_Video'
import Handing from '../Components/About/A_Eight'

const Careers = () => {
  return (
    <>
         <div>
        <Header/>
         <Handing h1={'CASHLESSPAY Careers'} p={'Join a team of forward-thinking, ambitious individuals who are passionate about creating a lasting impact in global finance.'}/>
     
         
        <C_Firsth h1={'FRONT-END DEVELOPER'} p1={'Craft seamless, mobile-first interfaces for digital nomads using React Native and Expo. Collaborate with our design and engineering teams, and work remotely with opportunities to engage globally. Make a tangible impact on Blazes user experience.'} p2={'Location'} p3={'CDMX/REMOTE/FULL-time'}  bt1={'React'} bt2={'React-Native'} bt3={'JavaScript'} bt4={'HTML'} bt5={'CSS'} />  


         <C_Firsth h1={'IN-HOUSE CONTENT CREATOR'} p1={'Create engaging content for digital nomads and expats. Work with marketing to tell Blaze s story and promote our payment solutions. Enjoy remote flexibility, equity, and the chance to shape our brand  voice.'} p2={'Location'} p3={'CDMX / Remote / Contract'} bt1={'Figma'} bt2={'Adobe Suite'} bt3={''} bt4={''} bt5={''} /> 

 
         <C_Firsth  h1={'SEO SPECIALIST'} p1={'Boost Blaze s online presence and drive organic traffic. Develop SEO strategies to reach digital nomads and expats, working closely with content and marketing teams. Enjoy remote work, equity, and a role that expands Blaze s global reach.'} p2={'Location'} p3={'CDMX / Remote / Full-time'} bt1={'Google Analytics'} bt2={'Ahrefs'} bt3={'SEMrush'} bt4={'On-page SEO'} bt5={'Off-page SEO'}/>  

 
        <C_Firsth  h1={'DATA ANALYST'} p1={'Use data to drive Blaze s strategies. Analyze user behavior and market trends to optimize our cross-border solutions. Work remotely, collaborate across teams, and make data-driven impact on our global expansion.'} p2={'Location'} p3={'CDMX / Remote / Full-time'} bt1={'SQL'} bt2={'Excel'} bt3={'Data visualization'} bt4={'Tableau'} bt5={'Power BI'}/> 


          <C_Firsth  h1={'FOUNDING ENGINEER'} p1={'Shape the future of cross-border payments for digital nomads. Architect our core platform, define technical vision, and lead feature development. Enjoy remote work, equity, and the chance to transform financial freedom globally.'} p2={'Location'} p3={'CDMX / Remote / Full-time'} bt1={'Full-Dtack'} bt2={'React Native'} bt3={'Expo'} bt4={''} bt5={''}/>  

        {/* <C_Video  /> */}
        <Footer/>
  
      
      </div>
    </>
  )
}

export default Careers