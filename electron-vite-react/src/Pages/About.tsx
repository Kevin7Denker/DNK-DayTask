import React from 'react'
import './Style/About.scss'
import Nav from '@/Components/Nav'

const About = () => {
    return(
        <div className="about">
            <div className="nav"><Nav /></div>
            <div className="container">
                About
            </div>
        </div>
    )
}

export default About