import React from "react"

function Products(props) {
  return(
    <div class="">
      <p><strong>Nome: </strong>{props.product.name}</p>
      <p><strong>Preço: </strong>{props.product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
      <p><strong>Descrição: </strong>{props.product.description}</p>
      <hr/>
    </div>
  )
}

export default Products