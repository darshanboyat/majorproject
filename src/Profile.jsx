import React from 'react'
import background from './Assets/background.jpg'
function Profile() {
  return (
   <>
        <img src={background} className="img-fluid" alt="..." />
        <div className="profile-container">
            <i class="bi bi-person-circle"/>
            <h1 className="name" style={{color: "black"}}>Admin Name</h1>
            <div className='main'>
            <div className="container-xxl">
              <div className="detail d-flex">
                <h1 className="h1">Phone :-&nbsp;&nbsp;&nbsp; </h1>
                <h1 className="h1">+91 99999 99999</h1>
              </div>
              <div className="detail d-flex">
                <h1 className="h1">Delivery Address :- &nbsp;&nbsp;&nbsp; </h1>
                <h1 className="h1">NaN</h1>
              </div>
              <div className="detail d-flex">
                <h1 className="h1">Landmark :- &nbsp;&nbsp;&nbsp; </h1>
                <h1 className="h1">NaN</h1>
              </div>
              <a href="#" className="CP">Change Password</a>
            </div>
            </div>
      </div>
   </>
  )
}

export default Profile