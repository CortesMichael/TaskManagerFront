import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import style from "./Login.module.css"
import { useEffect } from "react";
import { Modal } from "../../components/ModalCriarEquipe";
import { useState } from 'react'

export const Login = () => {

    const navigate = useNavigate(); //redireciona para outra rota

    const {loggedUser} = useUserContext();

    useEffect(() => {
        if(loggedUser != null) {
            navigate("/home")
        }
    }, []) //verifica se esta logado

    const [openModal, setOpenModal] = useState(false)

    return(
        //chama o module.css
            <div className={style.pageFormLogin}>
                <div className={style.BoxLogin}>
                    <div className={style.wrapper}>
                        <img src="Group.svg" alt="" />
                        <h1 className={style.titleL}>TaskManager</h1>
                    </div>
                    <p>Login</p>
                </div>
                <div className={style.BoxEmail}>
                    <label>E-mail:</label>
                    <input type="text" placeholder="" className={style.inputLEmail}/>
                </div>
                <div className={style.BoxPassword}>
                    <label>Senha:</label>
                    <input type="password" placeholder="" className={style.inputLPassword}/>
                </div>
                <button className={style.buttonL} type="submit">Confirmar</button>
                <div className={style.MiniLetters}>
                    <p>Forgot your password? <a href="https://www.instagram.com/kaua_henriique/">Click Here</a></p>
                    <p>Doesn't have an account? <a href="http://localhost:5173/register">Register</a></p>
                </div>
                <button onClick={() => setOpenModal(true)}>modal criar equipe</button>
                <Modal isOpen={openModal} setModalClose={() => setOpenModal(!openModal)}>
                    {/* children para mexer por dentro do modal */}
                </Modal>
            </div>
    );
}