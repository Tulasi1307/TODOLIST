import React from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Dashboard from './Dashboard'
import FormLogin from './FormLogin'
import FormSignin from './FormSignin'
const App=()=>{
  return (
   
    
    <Routes>
      <Route path='/' element={<FormLogin/>}></Route>
      <Route path='FormSignin' element={<FormSignin/>}></Route>
      <Route path='Dashboard' element={<Dashboard/>}></Route>
    </Routes>
      
    
  )
}
 


export default App
