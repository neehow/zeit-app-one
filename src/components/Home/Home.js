import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Link to="/color-converter/" className="page-link">Hex-RGB颜色转换</Link>
      <p className="more-text">更多页面开发中...</p>
      <Footer />
    </div>
  )
}

export default Home
