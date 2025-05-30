import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import style from "./Login.module.css"
import { useEffect } from "react";
import { ModalCreateTeam } from "../../components/ModalCreateTeam";
import { ModalCreateProject} from "../../components/ModalCreateProject";
import { useState } from 'react'

export const Login = () => {

    const navigate = useNavigate(); //redireciona para outra rota

    const {loggedUser} = useUserContext();

    useEffect(() => {
        if(loggedUser != null) {
            navigate("/home")
        }
    }, []) //verifica se esta logado

    const [modals, setModals] = useState({
        // inserir função dos modais
        team: false,
        project: false,
    });

    // abre / fecha os modais
    const toggleModal = (modalName) => {
        setModals(prev => ({ ...prev, [modalName]: !prev[modalName] }));
    };

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
                <button className={style.buttonL} type="submit">Confirm</button>
                <div className={style.MiniLetters}>
                    <p>Forgot your password? <a href="https://www.instagram.com/kaua_henriique/">Reset password</a></p>
                    <p>Doesn't have an account? <a href="http://localhost:5173/register">Sign in</a></p>
                </div>
                <div className="style.modalButtons">
                    <button onClick={() => toggleModal('team')} className="style.buttonL" >modal criar equipe</button>
                    <button onClick={() => toggleModal('project')} className="style.buttonL" >modal criar projeto</button>
                </div>
                <ModalCreateTeam isOpen={modals.team} setModalClose={() => toggleModal('team')}> {} </ModalCreateTeam>
                <ModalCreateProject isOpen={modals.project} setModalClose={() => toggleModal('project')}> {} </ModalCreateProject>
            </div>
    );
}