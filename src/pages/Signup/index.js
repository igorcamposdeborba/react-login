import React, {useState} from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const { signup } = useAuth();

    const handleSignup = () => {
        // validação de exception
        if (!email | !emailConfirm | !password) {
            setError("Preencha todos os campos");
            return;
        } else if (email !== emailConfirm){
            setError("Os email não são iguais");
            return;
        }

        // logar usuario
        const response = signup(email, password);
        if (response) { // se tiver retorno, vai mostrar o erro
            setError(response);
            return;
        }
        alert("Usuário cadastrado com sucesso");
        navigate("/"); // mudar de página
    }

  return (
    <C.Container>
        <C.Label>Cadastro</C.Label>
            <C.Content>
                <Input
                    type = "email"
                    placeholder = "Digite seu e-mail"
                    value = {email}
                    onChange = {(e) => [setEmail(e.target.value), setError("")]} />
            
            <Input
                type="email"
                placeholder="Confirme seu E-mail"
                value={emailConfirm}
                onChange={(e) => [setEmailConfirm(e.target.value), setError("")]}
            />

            <Input
                type="password"
                placeholder= "Digite sua senha"
                value = {password}
                onChange = {(e) => [setPassword(e.target.value), setError("")]}
            />
            <C.Small>Mínimo 6 caracteres</C.Small>
            
            <C.LabelError> {error} </C.LabelError>
            <Button Text="Inscreva-se" onClick={handleSignup}/>

            <C.LabelSignin>
                Já tem uma conta?
                <C.Strong>
                    <Link to="/">&nbsp;Entre</Link>
                </C.Strong>
            </C.LabelSignin>
        </C.Content>
    </C.Container>
  )
}

export default Signup