import './assets/css/App.css'
import { Characters } from './pages/characters/Characters'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Session } from './pages/session/Session'
import { UserProvider } from './context/UserDataContext'
import { Dashboard } from './components/DashboardComponent'
import { AuthProvider } from './context/AuthContext'
import { FavoritesProvider } from './context/FavoritesContext'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Favorites } from './pages/favorites/Favorites'

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <FavoritesProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/session" element={<Session />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />}>
                  <Route index element={<div>Dashboard Home</div>} />
                  <Route path="characters" element={<Characters />} />
                  <Route path="favorites" element={<Favorites />} />
                </Route>
              </Route>
              <Route path='*' element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </FavoritesProvider>
      </UserProvider>
    </AuthProvider>
  )
}

export default App