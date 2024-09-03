import React from "react"
import ReactDOM from "react-dom"
import App from "/App.js"
import Nav from "/nav.js"

ReactDOM.render(
    <div className="body">
        <Nav />
        <App />
    </div>
    ,document.getElementById("root"))