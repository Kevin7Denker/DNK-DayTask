import React from 'react'
import './Style/Config.scss'
import Nav from '@/Components/Nav'
import { Link } from 'react-router-dom'

const Config = () => {
    return(
        <div className="config">
            <div className="back">
                <Link to={'/'}><p><span className="material-symbols-outlined">reply</span></p> </Link>
            </div>
            <div className="container">
                <div className="tema">
                    <div className="title">
                        Tema
                    </div>
                    <div className="options">
                        <button> DarkMode </button>
                        <button> LightMode </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Config