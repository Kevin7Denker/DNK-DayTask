import React from 'react'
import './Style/Home.scss'
import Nav from '@/Components/Nav'

const Home = () => {
    return(
        <div className="home">
            <div className="nav"><Nav /></div>
            <div className="container">
                Hello World!
                <div className="sub">
                    my first program using Electron :)
                </div>
            </div>
        </div>
    )
}

export default Home