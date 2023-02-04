import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/Components.scss'

const Nav = () => { 
    return (
        <div className="nav">
            <div className="title"> 
                <h1>Day Task</h1>
            </div>
            <div className="options">
                <Link to={'/'} ><p><span className="material-symbols-outlined">home</span> Home</p></Link>
                <Link to={'/task'} ><p><span className="material-symbols-outlined">check</span> Tasks </p></Link>
                <Link to={'/about'} ><p><span className="material-symbols-outlined">info</span> About  </p></Link>
                <Link to={'/config'} ><p><span className="material-symbols-outlined">settings</span>Config </p></Link>
            </div>
        </div>
    )
}

export default Nav