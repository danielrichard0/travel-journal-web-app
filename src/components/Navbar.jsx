import React from "react"

export default function Navbar() {
    return(
        <nav>
            <div className="web-title">
                <img className="navbar--logo"src="https://dkv.ittelkom-pwt.ac.id/wp-content/uploads/2020/11/logo-website-world-wide-web-icon-icons-and-png-backgrounds-18-1.png" alt="" />
                <h1>my-travel-journal.web</h1>
            </div>

            <div className="navbar--auth">
                <h2>Login</h2>
                <h2>Signup</h2>
            </div>
            
        </nav>
    ) 
}