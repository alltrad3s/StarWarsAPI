import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Session } from './pages/session/Session'
import { MyProvider } from './context/UserDataContext'

function App() {

  return (
    <>
    <MyProvider>
      {/*BrowserRouter -> Activando la funcionalidad de Enrutamineto*/}
      <BrowserRouter>
        {/*Routes -> Definir Rutas */}
        <Routes>
          {/*Route -> Generamos todas las rutas que necesitemos */}
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/session' element={<Session />}/>
        </Routes>
      </BrowserRouter>
    </MyProvider>
    </>
  ) 
}

export default App
