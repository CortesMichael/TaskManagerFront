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
        <div className={style.page}> 
            <div className={style.BoxLogin}>
                {/* <img src="/logoTaskManager.png" alt="Logo TaskManager" /> */}
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
            <button type="submit">Confirmar</button>
            <div className={style.MiniLetters}>
                <p>Forgot your password? <span>Click Here</span></p>
                <p>Doesn't have an account? <span>Register</span></p>
            </div>
        </div>
    );
}