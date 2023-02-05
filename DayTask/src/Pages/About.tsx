import React from 'react'
import './Style/About.scss'
import Nav from '@/Components/Nav'
import img from '@/Images/About.jpg'

const About = () => {
    return(
        <div className="about">
            <div className="nav"><Nav /></div>
            <div className="container">
                <div className="title">
                    About
                </div>
                <div className="card">
                    <div className="container">
                         <div className="img">
                            <img src={img}/>
                        </div>
                        <div className="text">
                        <div className="mainText">
                                DayTask é um simples projeto que tem como objetivo ser um ToDo, onde seu diferencial
                                é posibilidade de migrar da versão web para desktop (Mac, Windows e Linux).
                                Aproveite e deixe que o DayTask te auxilie no seu dia a dia!
                        </div>
                        <div className="subText">
                                Feito por: Kevin Denker.{<br/>}
                                Tecnologias: React.js, TypeScript e Electron.
                        </div>
                        <div className="button">
                                <a href='https://github.com/Kevin7Denker'>Github</a>
                                <a href='https://www.linkedin.com/in/kevin-denker-573260244/'>Linkedin</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About