import React from 'react'

const MainNavbar = () => {
  
  return (
    <div className="main-navbar">
      <nav className="top-navbar">
          <ul>
            <li className="nav-links">Home</li>
            <li className="nav-links">Poppularity</li>
            <li className="nav-links">My Movies</li>
          </ul>
      </nav>
      <nav className="bottom-navbar">
        <div className="logo">Logo</div>
        <div className="search-bar">Search bar</div>
        <div className="login">Members Login</div>
      </nav>
    </div>
    
    
    )
}

export default MainNavbar