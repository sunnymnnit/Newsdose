// import { render } from '@testing-library/react'
import React, { Component } from 'react'
import {Link} from "react-router-dom"
export class Navbar extends Component
{
    render()
    {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="/">Newsdose</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/general">General</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/science">science</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/entertainment">Entertainment</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="sports">Sports</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="business">Business</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="/health">Health</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/technology">Technology</a>
      </li>
    </ul>
  </div>
</div>
</nav>
        </div>


    )
    }
}
export default Navbar