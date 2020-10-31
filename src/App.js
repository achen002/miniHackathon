import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import About from "./components/About";

export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Navbar />
        <About />
      </div>
    );
  }
}
