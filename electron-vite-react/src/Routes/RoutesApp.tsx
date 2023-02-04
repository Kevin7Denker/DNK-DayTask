import About from '@/Pages/About';
import Config from '@/Pages/Config';
import Home from '@/Pages/Home';
import Tasks from '@/Pages/Tasks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const RoutesApp = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/task' element={<Tasks />} />
            <Route path='/about' element={<About />} />
            <Route path='/config' element={<Config />} />
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp