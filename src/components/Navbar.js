import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'; // use Link/NavLink from the app's router


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
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/general">general</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/business">business</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/entertainment">entertainment</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/health">health</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/science">science</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/sports">sports</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/technology">technology</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
