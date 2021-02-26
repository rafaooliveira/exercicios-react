import React from "react"

function ToDoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
    color: "#90EE90"
}
  return(
    <div className="todo-item">
      {
        <input 
          onChange={() => props.handleChange(props.item.id)}
          type="checkbox"
          checked={props.item.completed}
        />
      }
      <p style={props.item.completed ? completedStyle: null}>{props.item.text}</p>
    </div>
  )
}
export default ToDoItem

// Css dinamico :)
// import React from "react"

// function ToDoItem(props) {
//   const completedStyle = {
//     fontStyle: "italic",
//     color: "#cdcdcd",
//     textDecoration: "line-through",
//     color: "#90EE90"
// }
//   return(
//     <div className="todo-item">
//       {
//         <input 
//           onChange={() => props.handleChange(props.item.id)}
//           type="checkbox"
//           checked={props.item.completed}
//         />
//       }
//       <p style={props.item.completed ? completedStyle: null}>{props.item.text}</p>
//     </div>
//   )
// }
// export default ToDoItem

//   const uf = {
//     rj: "RJ",
//     ba: "BA",
//     sc: "SC",
//     ce: "CE"
//   }
//   const style = {
//     backgroundColor: "#D90000"
//   }

//     <div>
//       <h1 style={style}>Teste h1</h1>
//       <div>
//         <input  type="radio" id="rj" name="estado" value="rj"/>
//         <label>{`${uf.rj}`}</label>
//       </div>
//       <div>
//         <input type="radio" id="ba" name="estado" value="ba"/>
//         <label>{`${uf.ba}`}</label>
//       </div>
//       <div>
//         <input type="radio" id="sc" name="estado" value="sc"/>
//         <label>{`${uf.sc}`}</label>
//       </div>
//       <div>
//         <input type="radio" id="ce" name="estado" value="sc"/>
//         <label>{`${uf.ce}`}</label>
//       </div>
//     </div>