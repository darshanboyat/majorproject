import './App.css';
import Navbar from './Navbar';
import NavbarAdmin from './Admin Section/NavbarAdmin.jsx';
import Home from './Home';
import Male from './IndividualCategory/Male';
import Female from './IndividualCategory/Female';
import Unisex from './IndividualCategory/Common';
import Admin from './Admin Section/Admin';
import Profile from './Profile';
import Cart from './Cart';
import {Routes, Route} from 'react-router-dom';

function URLcheck(){
  const str = window.location.pathname

  if(str === '/admin')
    return <NavbarAdmin/>
  else
    return <Navbar/>
}

function App() {
  return (
    <>
    <div className="App">
      {
        URLcheck()
      }

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/male' element={<Male/>}/>
        <Route path='/female' element={<Female/>}/>
        <Route path='/common' element={<Unisex/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/my-profile' element={<Profile/>}/>
      </Routes>
      <h6 style={{color: "white"}}>&copy; All rights reserved 2022</h6>
    </div>


    </>
  );
}

export default App;
