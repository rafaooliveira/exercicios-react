// da pra fazer lá no component APP e só retornar o valor,  <h1>Some cool stuff about conditional rendering</h1, mas eu preferi via props
import React from "react"

function Conditional(props) {
    return (
        <div>
            <h1>Navbar</h1>
            
            {props.isLoading ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>}
            
            <h1>Footer</h1>
        </div>
    )
    
}

export default Conditional


//  Funciona, mas é  mto verboso tá ligado? 
// import React from "react"

// function Conditional(props) {
//     if(props.isLoading === true) {
//         return (
//             <h1>Loading...</h1>
//         )
//     } else {
//         return (
//             <h1>Some cool stuff about conditional rendering</h1>
//         )
//     }
    
// }

// export default Conditional