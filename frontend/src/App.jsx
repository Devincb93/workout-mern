import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/home'
import Navbar from './components/navbar'

function App() {
  

  return (
    <div className='App'>
      <BrowserRouter>
      <div>
      <Navbar/>
        <div className='pages'>
          
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
          
        </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
