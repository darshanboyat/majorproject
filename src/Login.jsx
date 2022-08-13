import React from 'react'

function Login() {
  return (
   <>    
        <form className="Login" id='Login'>
            <div className='LoginHead'>
                <label className='LoginTitle'>Login</label>
                <div className="underline"></div>
            </div>

            <div className="container ml-8 custom-form">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className=" field form-label light">Email address</label>
                    <input type="email" className="field form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Email'/>
                    <div id="emailHelp" className="field form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="field form-label light">Password</label>
                    <input type="password" className="field form-control" id="exampleInputPassword1" placeholder='**************'/>
                </div>
            </div>
            <div className='SubmitButton'>
                <button type="button" className="btn btn-outline-light ">Login</button>
            </div>
            <div className='SubmitButton link'>
                <a href="#Register">Do not have an account ?</a>
            </div>
            

        </form>
        <hr style={{color: "white"}}/>
   </>
  )
}
export default Login