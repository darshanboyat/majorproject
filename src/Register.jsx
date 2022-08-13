import React from 'react'

function Register() {
  return (
    <>
        <form className="Registration" id='Register'>
            <div className="container ml-8 custom-form registeration">
                <div className='RegistrationHead'>
                    <label className='RegistrationTitle'>Register</label>
                    <div className="underline"></div>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="field form-label light">Name</label>
                    <input type="text" className="field form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Email'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="field form-label light">Phone Number</label>
                    <input type="phone" className="field form-control" placeholder='Enter your phone number'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="field form-label light">Email address</label>
                    <input type="email" className="field form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Email'/>
                    <div id="emailHelp" className="field form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="field form-label light">Permanent Address</label>
                    <input type="text" className="field form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Address'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="field form-label light">Password</label>
                    <input type="password" className="field form-control" id="exampleInputPassword1" placeholder='**************'/>
                </div>
                <div className='SubmitButton'>
                    <button type="button" className="btn btn-outline-light ">Register</button>
                </div>
                <div className='SubmitButton link'>
                    <a href="#Login">Already have an account ?</a>
                </div>


            </div>
        </form>
        <hr style={{color: "white"}}/>
    </>
  )
}

export default Register