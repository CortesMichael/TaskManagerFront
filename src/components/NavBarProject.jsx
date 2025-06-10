import style from "./NavBar.module.css"
import { ModalCreateTeam } from "./ModalCreateTeam"
import { ModalCreateProject } from "./ModalCreateProject"
import { ModalCreateTask } from "./ModalCreateTask";
import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";


export const NavBar = () => {


    const {loggedUser, setLoggedUser, userRole, setUserRole} = useUserContext();
    const [modal, setModal] = useState({
            project: false,
            team: false,
            task: false,
            viewteam: false,
        });

    const toggleModal = (modalName) => {
        setModal(prev => ({ ...prev, [modalName]: !prev[modalName] }));
    };

    const navigate = useNavigate();

    const BotaoRedirecionar = () => {
        navigate('/');
    }
    // Função para redirecionar para a página de login

    return(
        <header>
            <div className={style.icon} onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>
                <img src="./Group.svg" alt="" />
            </div>
            <div className={style.btns}>
                <button className={style.btnLogout} onClick={BotaoRedirecionar}>Logout</button>
                <button className={style.btnCreate} style={{display: userRole == "MNG" ? "inline-block" : "none"}} onClick={() => toggleModal('project')}>Create Project</button>
            </div>

            <ModalCreateProject isOpen={modal.project} setModalClose={() => toggleModal('project')}/>
            {/* <ModalViewTask />
            <ModalViewTeam /> */}

        </header>
    );
}