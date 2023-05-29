import { Route, Routes, useLocation } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import { Nav } from './components/nav'
import { HomePage } from './pages/homePage'
import { Discover } from './pages/discover'
import { AuthPage } from './pages/authPage'

import { BookwiseProvider } from './context/bookwiseContext'
import { Profile } from './pages/profile'

export function Router() {
    
    const location = useLocation();
    const hideNav = location.pathname === '/login';
    
    return (
        <>
            <BookwiseProvider>
                {!hideNav && <Nav />}
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/discover" element={<Discover />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<AuthPage />} />
                </Routes>
            </BookwiseProvider>
        </>
    )
}