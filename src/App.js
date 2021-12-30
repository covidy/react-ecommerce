import { Container } from 'react-bootstrap'
import Footer from './Components/Footer'
import Header from './Components/Header'
import HomeScreen from './screens/HomeScreen'
import React from 'react'
import './App.css';

function App() {
  return (
    <>
        <Header />
      <main>
        <Container>
          <h1>LATEST PRODUCTS</h1>
        <HomeScreen />
      </Container>
      </main>
      <Footer />
    </>

  )
}

export default App
