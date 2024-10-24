import React from 'react'
import Layout from '../components/Layout/Layout'
import '../custom css/homepage.css';
import v from '../components/v.mp4';
const HomePage = () => {
  return (
    <Layout>
       <div class="content">
        <div class="overlay"></div>
        <video autoPlay loop muted plays-inline class="bgvideo">
        <source src={v} autoPlay loop muted />
        </video>
        <h1>Flood Management & Monitoring System</h1>
        <p> Welcome to our Flood Management & Monitoring System, designed to provide real-time data and resources to help communities prepare for and respond to flooding events.<br></br>Our platform utilizes advanced technology to track weather patterns, monitor water levels, and provide timely alerts.<br></br> We aim to enhance safety and resilience by empowering individuals and organizations with the information they need to mitigate the impact of floods. Join us in our mission to create safer, more prepared communities!</p>
        
        <div>
          <button type="button">Need Help?</button>
          <button type="button">Wanna Be a Volunteer?</button>
       </div>

       </div>
    </Layout>
  )
}

export default HomePage