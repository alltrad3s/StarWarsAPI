import './assets/css/App.css'
import { Countries } from './pages/countries/Countries'
import { Characters } from './pages/characters/Characters'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Session } from './pages/session/Session'
import { UserProvider } from './context/UserDataContext'
import { Dashboard } from './components/DashboardComponent'
import { Planets } from './pages/planets/Planets'
import { Starships } from './pages/starships/Starships'
import { Films } from './pages/films/Films'

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<div>Dashboard Home</div>} />
            <Route path="countries" element={<Countries />} />
            <Route path="characters" element={<Characters />} />
            <Route path="planets" element={<Planets />} />
            <Route path="starships" element={<Starships />} />
            <Route path="films" element={<Films />} />

          </Route>
          <Route path='/home' element={<Home />}/>
          <Route path='/session' element={<Session />}/>
          <Route path='*' element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App