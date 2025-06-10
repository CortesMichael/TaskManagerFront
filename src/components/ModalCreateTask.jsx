import style from "./ModalCreate.module.css";
import { useState } from "react";
import api from "../api/api";

export const ModalCreateTask = ({isOpen, children, setModalClose, equipId}) => {

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
            await api.post(`/task/${equipId}/create`, {
                "priority": priority,
                "description": description,
                "initialDate": initialDate,
                "finalDate": finalDate,
                "assigneeId": assignee
            });
        } catch (error) {
            console.error("Erro ao criar tarefa:", error);
        }
        console.log("Enviando o formulário");
        console.log(priority, description, initialDate, finalDate, assignee);
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
                                    className={style.inputN}
                                    type="number" 
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
                                <select 
                                    className={style.inputN} 
                                    value={assignee} 
                                    onChange={handleAssigneeChange}
                                >
                                    <option value="">Select an assignee</option>
                                    <option value=""></option>
                                </select>
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