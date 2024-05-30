import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.scss'
import Navbar from './Dashboard/Navbar'
import Sidebar from './Dashboard/Sidebar'
import Home from './pages/Home'
import Estadisticas from './pages/Estadisticas'
import Calendario from './pages/Calendario'


function App() {
  return (
      <Router>
        <div className='flex'>
        <Sidebar/>
        <div className='content w-100'>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Estadisticas' element={<Estadisticas />} />
            <Route path='/Calendario' element={<Calendario />} />
          </Routes>
        </div>
        </div>

      </Router>
      
    
  )
}

export default App
