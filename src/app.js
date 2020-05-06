import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
// Components SKAL starte med Stort Bogstav
// SKAL indeholde en render() { } function

// En Class har methods: render() (altid) og fx. handlePick() {alert('klik)}

ReactDOM.render(<p>This is my boilerplate</p>, document.querySelector("#app"));
