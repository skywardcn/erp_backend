import { Routes, Route } from 'react-router-dom'

import HomeView from '@/components/home'
import NewsView from '@/components/news'
import AboutView from '@/components/about'

const RoutesList = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeView />}></Route>
            <Route path="/news" element={<NewsView id={1} />}></Route>
            <Route path="/about" element={<AboutView />}></Route>
        </Routes >
    )
}

export default RoutesList