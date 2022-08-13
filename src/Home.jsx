import React from 'react'
import Category from './Category';
import Login from './Login';
import Register from './Register';
import About from './About';
import Contact from './Contact';

function Home() {
  return (
    <>
        <Category/>
        <Login/>
        <Register/>
        <About/>
        <Contact/>
    </>
  )
}

export default Home