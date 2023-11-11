import { Routes, Route } from 'react-router-dom'

import HomeView from '@/features/home'
import NewsView from '@/features/news'
import AboutView from '@/features/about'



const RoutesList = () => {
    return (
        <Routes>
            <Route path="/" Component={HomeView}></Route>
            <Route path="/news/:page" Component={NewsView}></Route>
            <Route path="/about" Component={AboutView}></Route>

        </Routes >
    )
}

export default RoutesList