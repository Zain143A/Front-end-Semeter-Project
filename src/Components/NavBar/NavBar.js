import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <>
    
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
            
                <a className="navbar-brand heading" href="x">
                    <h2>
                        <i className="fas fa-book-open"></i>
                        <strong> Book<span>shelf</span></strong>
                    </h2>
                </a>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-primary buttonClass" type="submit">Search</button>
                </form>
            
            </div>
            
        </nav>
    </>
  )
}

export default NavBar