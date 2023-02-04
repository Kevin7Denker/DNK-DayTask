import React from 'react'
import './Style/Tasks.scss'
import Nav from '@/Components/Nav'

const Tasks = () => {
    return(
        <div className="tasks">
            <div className="nav"><Nav /></div>
            <div className="container">
                Task
            </div>
        </div>
    )
}

export default Tasks