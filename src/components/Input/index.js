import React from "react";
import * as C from "./styles";

const Input = ({ type, placeholder, value, onChange}) => { // propriedades que recebi do input
  return (
    <C.Input 
        value = {value}
        onChange = {onChange}
        type = {type}
        placeholder = {placeholder}
    /> // definir atributos do componente
    // C. aplica estilos no componente Input
  )
}

export default Input