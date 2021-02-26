import React, { useState, useEffect } from "react"
import randomcolor from "randomcolor"
// Convert the class below to a functional component that uses the useState hook to initalize a count vartiable to 0 and display the count on the screen.
// Don't worry about the part where the button changes the count quite yet, that's what you're here to learn about!
function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("#000")
  
  useEffect(() => {
    // setInterval will be running forever a cada segundo vai chamar o console.log('interval')
    let intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000)
    return () => clearInterval(intervalId)
    
  }, [])
  useEffect(() => {
    setColor(randomcolor())
  }, [count]) 

  return (
      <div>
          <h1 style={{color: color}}>{count}</h1>
      </div>
  )
}
// class App extends React.Component {
//     constructor() {
//       super()
//       this.state = {
//           count: 0
//       }
//     }
    
//     render() {
//       return (
//         <div>
//           <h1>{this.state.count}</h1>
//           <button>Change!</button>
//         </div>
//       )
//     }
// }

export default App

// // 27
// // HOOK.JS CREATE STATE
// import React, { useState }from "react"

// function App() {
//   const [answer] = useState("yes")
//   console.log(answer)
  
//   return(
//     <div>
//       <h1>Is state important to know? {answer}</h1>
//     </div>
//   )
// }
// // class App extends React.Component {
// //     constructor() {
// //         super()
// //         this.state = {
// //             answer: "Yes"
// //         }
// //     }
    
// //     render() {
// //         return (
// //             <div>
// //                 <h1>Is state important to know? {this.state.answer}</h1>
// //             </div>
// //         )
// //     }
// // }

// export default App 

// 26
//  nao usar mais constructor e usar arrow functions
// import React, {Component} from "react"

// class App extends Component {
//     // Change to use class properties
//     state = {
//       firstName: ""
//     }
    
//     // Change to use arrow functions
//     handleChange = ((event) =>  {
//         const { name, value } = event.target
//         this.setState({
//             [name]: value
//         })
//     })
    
//     render() {
//         return (
//             <main>
//                 <form>
//                     <input 
//                         type="text"
//                         name="firstName" 
//                         value={this.state.firstName} 
//                         onChange={this.handleChange} 
//                         placeholder="First Name"
//                     />
//                 </form>
//                 <h1>{this.state.firstName}</h1>
//             </main>
//         )
//     }
// }

// export default App


// 25
// Componetizando os forms
// // https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

// import React, {Component} from "react"
// import FormContainer from "./FormContainer"

// function App() {
//     return (
//         <FormContainer />
//     )
// }

// export default App


// 24 EXERCICIO QUE EU NÃO FIZ
// TO CANSADO

// import React, {Component} from "react"

// /**
//  * Challenge: Wire up the partially-finished travel form so that it works!
//  * Remember to use the concept of controlled forms
//  * https://reactjs.org/docs/forms.html
//  * 
//  * All information should be populating the text below the form in real-time
//  * as you're filling it out
//  * 
//  * This exercise is adapted from the V School curriculum on vanilla JS forms:
//  * https://coursework.vschool.io/travel-form/
//  * 
//  * All of our challenges and learning resources are open for the public
//  * to play around with and learn from at https://coursework.vschool.io
//  */

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             firstName: "",
//             lastName: "",
//             age: "",
//             gender: "",
//             destination: "",
//             isVegan: false,
//             isKosher: false,
//             isLactoseFree: false
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
    
//     handleChange(event) {
//         const {name, value, type, checked} = event.target
//         type === "checkbox" ? 
//             this.setState({
//                 [name]: checked
//             })
//         :
//         this.setState({
//             [name]: value
//         }) 
//     }
    
//     render() {
//         return (
//             <main>
//                 <form>
//                     <input 
//                         name="firstName" 
//                         value={this.state.firstName} 
//                         onChange={this.handleChange} 
//                         placeholder="First Name" 
//                     />
//                     <br />
                    
//                     <input 
//                         name="lastName" 
//                         value={this.state.lastName}
//                         onChange={this.handleChange} 
//                         placeholder="Last Name" 
//                     />
//                     <br />
                    
//                     <input 
//                         name="age" 
//                         value={this.state.age}
//                         onChange={this.handleChange} 
//                         placeholder="Age" 
//                     />
//                     <br />
                    
//                     <label>
//                         <input 
//                             type="radio" 
//                             name="gender"
//                             value="male"
//                             checked={this.state.gender === "male"}
//                             onChange={this.handleChange}
//                         /> Male
//                     </label>
                    
//                     <br />
                    
//                     <label>
//                         <input 
//                             type="radio" 
//                             name="gender"
//                             value="female"
//                             checked={this.state.gender === "female"}
//                             onChange={this.handleChange}
//                         /> Female
//                     </label>
                    
//                     <br />
                    
//                     <select 
//                         value={this.state.destination} 
//                         name="destination" 
//                         onChange={this.handleChange}
//                     >
//                         <option value="">-- Please Choose a destination --</option>
//                         <option value="germany">Germany</option>
//                         <option value="norway">Norway</option>
//                         <option value="north pole">North Pole</option>
//                         <option value="south pole">South Pole</option>
//                     </select>
                    
//                     <br />
                    
//                     <label>
//                         <input 
//                             type="checkbox"
//                             name="isVegan"
//                             onChange={this.handleChange}
//                             checked={this.state.isVegan}
//                         /> Vegan?
//                     </label>
//                     <br />
                    
//                     <label>
//                         <input 
//                             type="checkbox"
//                             name="isKosher"
//                             onChange={this.handleChange}
//                             checked={this.state.isKosher}
//                         /> Kosher?
//                     </label>
//                     <br />
                    
//                     <label>
//                         <input 
//                             type="checkbox"
//                             name="isLactoseFree"
//                             onChange={this.handleChange}
//                             checked={this.state.isLactoseFree}
//                         /> Lactose Free?
//                     </label>
//                     <br />
                    
//                     <button>Submit</button>
//                 </form>
//                 <hr />
//                 <h2>Entered information:</h2>
//                 <p>Your name: {this.state.firstName} {this.state.lastName}</p>
//                 <p>Your age: {this.state.age}</p>
//                 <p>Your gender: {this.state.gender}</p>
//                 <p>Your destination: {this.state.destination}</p>
//                 <p>Your dietary restrictions:</p>
                
//                 <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
//                 <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
//                 <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
                
//             </main>
//         )
//     }
// }

// export default App