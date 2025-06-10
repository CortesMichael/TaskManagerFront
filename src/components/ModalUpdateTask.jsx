import style from "./ModalCreate.module.css";
import { useState } from "react";
import api from "../api/api";

export const ModalUpdateTask = ({isOpen, children, setModalClose, taskId}) => {
    
    if(isOpen){
        return(
            <div className={style.modalBG}>
                <div className={style.mainBox}>
                    <div className={style.content}></div>
                </div>
            </div>
        )
    }

}