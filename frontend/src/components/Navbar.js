import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand text-color-red" to="/">eventbrite</Link>
                        <input type="search" name="search" id="search" className='search' placeholder='Search for events'/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="flex-row-reverse collapse navbar-collapse" id="navbarNav">
                        <ul className=" navbar-nav d-flex flex-row  ">
                            <li className="nav-item px-3">
                                <Link className="nav-link" to={"/signin"}>Log In</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/signup"}>Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar