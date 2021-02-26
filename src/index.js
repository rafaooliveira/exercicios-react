import React from "react"
import ReactDOM from "react-dom"
import './index.css'
// import MyInfo from "./components/MyInfo"
import App from "./components/App"

//importar react-dom pra usar o render (param 1 = o que eu vou renderizar, param 2 = onde eu quero renderizar isso)
//JSX
ReactDOM.render(
  <App />, 
  document.getElementById("root")
)