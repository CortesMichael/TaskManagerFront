import style from "./ModalCreate.module.css";
import { useState } from "react";
import api from "../api/api";

export const ModalCreateTask = ({isOpen, children, setModalClose}) => {

    const [priority, setPriority] = useState("");
    const [description, setDescription] = useState("");
    const [initialDate, setInitialDate] = useState("");
    const [finalDate, setFinalDate] = useState("");
    const [assignee, setAssignee] = useState("");

    const handlePriorityChange = (e) => {
        setPriority(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }
    const handleInitialDateChange = (e) => {
        setInitialDate(e.target.value);
    }
    const handleFinalDateChange = (e) => {
        setFinalDate(e.target.value);
    }
    const handleAssigneeChange = (e) => {
        setAssignee(e.target.value);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await api.post('/task', {
                "priority": priority,
                "description": description,
                "initialDate": initialDate,
                "finalDate": finalDate,
                "assignee": assignee
            });
        } catch (error) {
            console.error("Erro ao criar tarefa:", error);
        }
    }

    if(isOpen){
        return(
            <div className={style.modalBG}>
                <div className={style.mainBox}>
                    <div className={style.content}>
                        <h2>Create new task</h2>

                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Task priority:</label>
                                <input 
                                    type="text" 
                                    className={style.inputN} 
                                    placeholder="Insert the priority of the task" 
                                    value={priority} 
                                    onChange={handlePriorityChange}
                                />
                            </div>
                            <div>
                                <label>Task description:</label>
                                <input 
                                    type="text" 
                                    className={style.inputN} 
                                    placeholder="Insert the description of the task" 
                                    value={description} 
                                    onChange={handleDescriptionChange}
                                />
                            </div>
                            <div>
                                <label>Task initial date:</label>
                                <input 
                                    type="date" 
                                    className={style.inputN} 
                                    value={initialDate} 
                                    onChange={handleInitialDateChange}
                                />
                            </div>
                            <div>
                                <label>Task final date:</label>
                                <input 
                                    type="date" 
                                    className={style.inputN} 
                                    value={finalDate} 
                                    onChange={handleFinalDateChange}
                                />
                            </div>
                            <div>
                                <label>Task assignee:</label>
                                <input 
                                    type="text" 
                                    className={style.inputN} 
                                    placeholder="Insert the assignee of the task" 
                                    value={assignee} 
                                    onChange={handleAssigneeChange}
                                />
                            </div>
                            <div className={style.boxClose}>
                                <button 
                                    type="button" 
                                    onClick={setModalClose} 
                                    className={style.buttonClose}
                                    style={{ marginRight: "10px" }}
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit" 
                                    className={style.buttonClose}
                                >
                                    Create task
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}