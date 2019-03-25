import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import './Home.css'

const Home = () => {
  return (
    <div className="App">
      <Link to="/color-converter/" className="page-link">Hex-RGB颜色转换</Link>
      <Footer />
    </div>
  )
}

export default Home
