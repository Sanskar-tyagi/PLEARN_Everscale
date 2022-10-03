import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'

const Header = ()=>{
    return (
    <header class="p-3 bg-dark text-white">
       <nav class="main-menu">
    <ul>
      <li>
        <a href="http://justinfarrow.com">
          <i class="fa fa-home fa-2x"></i>
          <span class="nav-text">
            Dashboard
          </span>
        </a>

      </li>
      <li class="has-subnav">
        <a href="#">
          <i class="fa fa-laptop fa-2x"></i>
          <span class="nav-text">
            Stars Components
          </span>
        </a>

      </li>
      <li class="has-subnav">
        <a href="#">
          <i class="fa fa-list fa-2x"></i>
          <span class="nav-text">
            Forms
          </span>
        </a>

      </li>
      <li class="has-subnav">
        <a href="#">
          <i class="fa fa-folder-open fa-2x"></i>
          <span class="nav-text">
            Pages
          </span>
        </a>

      </li>
      <li>
        <a href="#">
          <i class="fa fa-bar-chart-o fa-2x"></i>
          <span class="nav-text">
            Graphs and Statistics
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-font fa-2x"></i>
          <span class="nav-text">
            Quotes
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-table fa-2x"></i>
          <span class="nav-text">
            Tables
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-map-marker fa-2x"></i>
          <span class="nav-text">
            Maps
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-info fa-2x"></i>
          <span class="nav-text">
            Documentation
          </span>
        </a>
      </li>
    </ul>

    <ul class="logout">
      <li>
        <a href="#">
          <i class="fa fa-power-off fa-2x"></i>
          <span class="nav-text">
            Logout
          </span>
        </a>
      </li>
    </ul>
  </nav>
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
              
            </svg>
          </a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="/" class="nav-link px-2 text-secondary">Home</a></li> 
          </ul>

          <div class="text-end"> 
            <button type="button" class="btn btn-warning">Connect Wallet</button>
          </div>
        </div>
      </div>
    </header>
    )
}

export default Header;