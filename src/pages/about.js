import React from 'react'
import { Breadcrumbs } from '@material-tailwind/react'
import { Link } from "react-router-dom";
import AboutSection from "../components/aboutSection.js";
import Pastors from "../components/pastors.js";
import Numbers from '../components/numbers.js';

const About = () => {
  return (
    <div className="about-wrapper">
        <div className='dev-header-wrapper d-flex flex-column align-items-center justify-content-center'>
                <div className='breadcrumb-title'>
                    <h1>About us</h1>
                </div>
                    <Breadcrumbs className='bread-crumbs'>
                        <Link to="/" 
                        className="opacity-60 text-base">
                            Home
                        </Link>
                        <span className='text-blue-gray-700 text-base'>About us</span>
                    </Breadcrumbs>

        </div>
        <AboutSection />
        <Numbers />
        <Pastors />
    </div>
  )
}

export default About