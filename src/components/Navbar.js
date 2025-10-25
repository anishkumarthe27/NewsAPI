import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom'; // BrowserRouter, Routes, Route, Navigate


export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{marginTop: '-20px', height: '78px'}}>
        <div className="container-fluid navbar-dark bg-dark">
          <b className="navbar-brand">News</b>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <BrowserRouter>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/general">general</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/business">business</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/entertainment">entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/health">health</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/science">science</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/sports">sports</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/technology">technology</Link></li>
            </ul>
            </BrowserRouter>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
