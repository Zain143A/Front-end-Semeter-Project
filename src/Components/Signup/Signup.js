import React, {useState} from 'react'
import './Signup.css'
function Signup() {
    const [Passicon,setPassIcon]=useState("fa fa-eye");
    const [PassType,setPassType]=useState("password");

    const IconHandler=()=>{
        if(Passicon==="fa fa-eye"){
        setPassIcon("fa fa-eye-slash")
        setPassType("text")
        }
        else{
        setPassIcon("fa fa-eye")
        setPassType("password")
        }
    }
  return (
    <>
    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div className="card bg-glass">
          <div className="card-body px-4 py-5 px-md-5">
            <form>
              {/* 2 column grid layout with text inputs for the first and last names */}
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="form-outline">
                    <input type="text" id="form3Example1" className="form-control" />
                    <label className="form-label" htmlFor="form3Example1">First name</label>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="form-outline">
                    <input type="text" id="form3Example2" className="form-control" />
                    <label className="form-label" htmlFor="form3Example2">Last name</label>
                  </div>
                </div>
              </div>

              {/* Email input */}
              <div className="form-outline mb-3">
                <input type="email" id="form3Example3" className="form-control" />
                <label className="form-label" htmlFor="form3Example3">Email address</label>
              </div>

              {/*Password input*/}
              <div className="form-outline mb-3">
                <div className='input-group'>
                  <input type={PassType} id="form3Example4" className="form-control"/>
                  <div className='input-group-addon p-2 icon'>
                    <i className={Passicon} onClick={IconHandler}></i>
                  </div>
                </div>
                <label className="form-label" htmlFor="form3Example4">Password</label>
              </div>
              

              {/* Submit button */}
              <button type="submit" className="btn btn-primary btn-color btn-block mb-4 w-100">
                Sign up
              </button>
            </form>   
          </div>
        </div>
      </div> 
    </>
  )
}
export default Signup