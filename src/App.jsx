import React from 'react'
import AppRoutes from './routes/approutes'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header'


const App = () => {
  return (
    <>
    

     <AppRoutes/>
     <Header/>
    </>
  )
}

export default App