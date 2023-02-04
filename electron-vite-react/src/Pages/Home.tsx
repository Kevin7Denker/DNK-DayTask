import React from 'react'
import './Style/Home.scss'
import Nav from '@/Components/Nav'

const Home = () => {
    return(
        <div className="home">
            <div className="nav"><Nav /></div>
            <div className="container">
                Seja Bem Vindo
            </div>
        </div>
    )
}

export default Home