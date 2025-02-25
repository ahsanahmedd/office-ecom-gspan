import React from 'react'
import AppRoutes from './routes/approutes'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header'
import ScrollToTop from './components/scrolltotop'


const App = () => {
  return (
    <>
    
    <ScrollToTop/>

     <AppRoutes/>
     <Header/>
    </>
  )
}

export default App