import style from "./NavBar.module.css"
import { ModalCreateTeam } from "../components/ModalCreateTeam"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {

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
                <button className={style.btnLogout} onClick={() => navigate("/")} style={{ cursor: "pointer" }}>Logout</button>
                <button className={style.btnCreate} onClick={() => toggleModal('team')}>Create Team</button>
            </div>

            <ModalCreateTeam isOpen={modal.team} setModalClose={() => toggleModal('team')}/>
            {/* <ModalViewTask />
            <ModalViewTeam /> */}

        </header>
    );
}