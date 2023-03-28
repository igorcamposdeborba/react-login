import React from "react"
import { useNavigate } from "react-router-dom";
import ButtonSmall from "../../components/ButtonSmall";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();

  return (
    <C.Container>
        <C.Title>Home</C.Title>
        <ButtonSmall Text="Sair" onClick={() => [signout(), navigate("/")]}>
            Sair
        </ButtonSmall>
    </C.Container>
  )
}

export default Home