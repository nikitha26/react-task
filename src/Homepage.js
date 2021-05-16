import React from 'react';
import './Homepage.css'
import Blog from './Blog'
function Home(){
    return(
        <header className="bg">
      <nav class="navbar navbar-expand-sm navbar-dark fixed-top">
        <a class="navbar-brand" href="#">WEBINARS</a>
        <ul class="navbar-nav ml-auto navbar-items">
          <li class="nav-item">
            <a class="nav-link" href="#">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">BLOG</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">WEBNAR</a>
          </li>
        </ul>
      </nav>
    </header>
    )
}
export default Home;