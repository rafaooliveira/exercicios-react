import React from "react"

function Joke(props) {
    return (
      <div>
        <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
        <h3 style={{color: !props.question && "#888888"}}>Answer: {props.punchLine}</h3>
        <hr/>
      </div>
    )
}

export default Joke

// Ex props e exercicio
// import React from "react";

// function Joke(props) {
//   const style = {
//     color: "#fff"
//   }
//   return(
//     <div className="piadinha">
//       <p><strong>Piada:</strong> {props.combo.joke}</p>
//       <p style={style}><strong>Punch:</strong> {props.combo.punch}</p>
//     </div>
//   )
// }

// export default Joke