import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import HomeScreen from './screens/HomeScreen'
import React from 'react'
import './App.css';

function App() {
  return (
    <Router>
        <Header />
      <main classeName="my-3">
        <Container>
          <h1>LATEST PRODUCTS</h1>
           <HomeScreen />
          <Routes path="/" component={HomeScreen} exact />
      </Container>
      </main>
      <Footer />
    </Router>

  )
}

export default App
