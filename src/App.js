import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
<<<<<<< HEAD
import Navbar from "./Navbar";
import About from "./components/About";
=======
import Navbar from "./Navbar"
import Minimenu from "./Minimenu"


>>>>>>> b026ca7947ad2bfbecb46ead07a299f787b38ae4

export default class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="ui container">
        <Navbar />
        <About />
=======
      <div className= "ui container">
        <Minimenu />
         <Navbar />
        
>>>>>>> b026ca7947ad2bfbecb46ead07a299f787b38ae4
      </div>
    );
  }
}
