import React from 'react'
import Login from '../LogIn/Login'
// import Signup from '../Signup/Signup'
import './LandingPage.css'
function LandingPage() {
  return (
    <>
    <div className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
            <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0 z-ind">
                <div className="main-div">
                    <div className="my-1 display-5 fw-bold ls-tight Text-Shadow" style={{color: "hsl(218, 81%, 95%)"}}>
                    <h1>The Books Are</h1>
                        <ul className="dynamic-text">
                            <li><span>Dreams You Hold</span></li>
                            <li><span>Loyal Friend to be</span></li>
                            <li><span>Gift To Open Again </span></li>
                            <li><span>Magic for Someone</span></li>
                            <li><span>Ocean of Knowledge</span></li>
                        </ul>
                    </div>
                </div>
                <p className="mb-4 opacity-70 Text-Shadow" style={{color:"lightgrey"}}>
                Bank of Books on your Internet. Manage your whole library with us.
                </p>
            </div>
                <Login/>
            </div>
        </div>
    </div>
    </>
  )
}

export default LandingPage