import style from "./NavBar.module.css"
import { ModalCreateTeam } from "../components/ModalCreateTeam"
import { useState } from "react";

export const NavBar = () => {

    const [modal, setModal] = useState({
            team: false,
            task: false,
            viewteam: false,
        });

    const toggleModal = (modalName) => {
        setModal(prev => ({ ...prev, [modalName]: !prev[modalName] }));
    };

    return(
        <header>
            <div className={style.icon}>
                <img src="./Group.svg" alt="" />
            </div>
            <div className={style.btns}>
                <button className={style.btnLogout}>Logout</button>
                <button className={style.btnCreate} onClick={() => toggleModal('team')}>Create Team</button>
            </div>

            <ModalCreateTeam isOpen={modal.team} setModalClose={() => toggleModal('team')}/>
            {/* <ModalViewTask />
            <ModalViewTeam /> */}

        </header>
    );
}