import React from "react";

export default function NavComponent({ handleLogout }) {
  return (
    <nav>
      <div className="web-title">
        <img
          className="navbar--logo"
          src="https://dkv.ittelkom-pwt.ac.id/wp-content/uploads/2020/11/logo-website-world-wide-web-icon-icons-and-png-backgrounds-18-1.png"
          alt=""
        />
        <h1>my-travel-journal.web</h1>
      </div>

      <div className="navbar--auth">
        {handleLogout ? (
          <h2>
            <button onClick={handleLogout}>LOGOUT</button>
          </h2>
        ) : null}
      </div>
    </nav>
  );
}
