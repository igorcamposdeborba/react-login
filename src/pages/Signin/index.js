import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signin = () => {
    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email || !password) { // verificação se tem os campos preenchidos
            setError("Preencha todos os campos");
            return;
        }
        const response = signin(email, password); // verificar e-mail e senha

        if (response) { // se tiver retorno, vai mostrar o erro
            setError(response);
            return;
        }
        navigate("/home"); // mudar de página
    }

  return (
    <C.Container>
        <C.Label>Login</C.Label>
        <C.Content>
            <Input
                type = "email"
                placeholder = "Digite seu e-mail"
                value = {email}
                onChange = {(e) => [setEmail(e.target.value), setError("")]} />

            <Input
                type = "password"
                placeholder = "Senha"
                value = {password}
                onChange = {(e) => [setPassword(e.target.value), setError("")]}/>
            <C.LabelError> {error} </C.LabelError>
            <Button Text="Entrar" onClick={ handleLogin } />

            <C.LabelSignup>
                Não tem uma conta?
                <C.Strong>
                    <Link to="/signup">&nbsp;Registre-se</Link>
                </C.Strong>
            </C.LabelSignup>
        </C.Content>
    </C.Container>
  )
}

export default Signin