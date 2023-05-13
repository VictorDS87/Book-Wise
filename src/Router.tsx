import { Route, Routes } from 'react-router-dom'
import { AuthPage } from './pages/authPage'
import { BookwiseProvider } from './context/bookwiseContext'
import { HomePage } from './pages/homePage'
import { Nav } from './components/nav'
import { Navigate } from 'react-router-dom'

export function Router() {
    return (
        <>
            <BookwiseProvider>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/" element={<Nav />}>
                        <Route path="/home" element={<HomePage />} />

                    </Route>
                    <Route path="/login" element={<AuthPage />} />
                </Routes>
            </BookwiseProvider>
        </>
    )
}