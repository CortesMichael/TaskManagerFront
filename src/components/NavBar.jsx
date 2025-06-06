import style from "./NavBar.module.css"
import { ModalCreateTeam } from "../components/ModalCreateTeam"
import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";


export const NavBar = () => {


    const {loggedUser, setLoggedUser, userRole, setUserRole} = useUserContext();
    const [modal, setModal] = useState({
            team: false,
            task: false,
            viewteam: false,
        });

    const toggleModal = (modalName) => {
        setModal(prev => ({ ...prev, [modalName]: !prev[modalName] }));
    };

    const navigate = useNavigate();

    return(
        <header>
            <div className={style.icon} onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>
                <img src="./Group.svg" alt="" />
            </div>
            <div className={style.btns}>
                <button className={style.btnLogout}>Logout</button>
                <button className={style.btnCreate} style={{display: userRole == "MNG" ? "inline-block" : "none"}} onClick={() => toggleModal('team')}>Create Team</button>
            </div>

            <ModalCreateTeam isOpen={modal.team} setModalClose={() => toggleModal('team')}/>
            {/* <ModalViewTask />
            <ModalViewTeam /> */}

        </header>
    );
}