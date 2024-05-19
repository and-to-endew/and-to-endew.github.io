import React from "react";
import "./App.css";
import './fonts/Font.css';

function App(){

  return(
    <div className="blog">
    <div className="header">
    <h1 className="title">MINIONS MOOD</h1>
    </div>
    <div className="container">
      <div className="left-container">
        <div className="List"></div>
        <div className="List"></div>
        <div className="List"></div>
      </div>
      <div className="right-container">
        <div className="search-box">
          <input className="input-box"></input>
          <button className="confirm-button">init!</button>
        </div>
      </div>

    </div>
    </div>
  );
}

function List(){

}

export default App;