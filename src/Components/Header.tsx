import React from "react"
import {IMain} from "../Models/Header"

function Header(props: IMain) {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span data-feather="menu" className="fea icon-md"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
