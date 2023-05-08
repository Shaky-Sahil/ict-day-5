import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Courseview from './components/Courseview'
import { BrowserRouter,Route, Routes } from 'react-router-dom'  
import Addcourse from './components/Addcourse'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/view' element={<Courseview/>}></Route>
        <Route path='/add' element={<Addcourse/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
