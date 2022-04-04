
import React, { Component } from 'react'
import News from './components/News'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/' element={<News  key="general" pageSize={5} country="in" category="general"/>} />
        <Route path='/business' element={<News key="business" pageSize={5} country="in" category="business"/>} />
        <Route path='/sports' element={<News key="business" pageSize={5} country="in" category="sports"/>} />
        <Route path='/entertainment' element={<News key="business" pageSize={5} country="in" category="entertainment"/>} />
        <Route path='/health' element={<News key="business" pageSize={5} country="in" category="health"/>} />
        <Route path='/technology' element={<News key="business" pageSize={5} country="in" category="technology"/>} />
        </Routes>
      </Router>
    )
  }
}