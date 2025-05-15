import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import style from "./Login.module.css"
import { useEffect } from "react";

export const Login = () => {

    const navigate = useNavigate(); //redireciona para outra rota

    const {loggedUser} = useUserContext();

    useEffect(() => {
        if(loggedUser != null) {
            navigate("/home")
        }
    }, []) //verifica se esta logado

    return(
        //chama o module.css
            <div className={style.pageFormLogin}>
                <div className={style.BoxLogin}>
                    <img src="/logo.png" alt="Logo TaskManager" />
                    <p>Login</p>
                </div>
                <div className={style.BoxEmail}>
                    <label>E-mail:</label>
                    <input type="text" placeholder=""/>
                </div>
                <div className={style.BoxPassword}>
                    <label>Senha:</label>
                    <input type="password" placeholder=""/>
                </div>
                <button className={style.buttonL} type="submit">Confirmar</button>
                <div className={style.MiniLetters}>
                    <p>Forgot your password? <a href="https://www.instagram.com/kaua_henriique/">Click Here</a></p>
                    <p>Doesn't have an account? <a href="http://localhost:5173/register">Register</a></p>
                </div>
            </div>
    );
}