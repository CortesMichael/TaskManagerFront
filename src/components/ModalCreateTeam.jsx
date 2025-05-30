import style from "./ModalCreate.module.css"
import { useState } from "react";

//importa o método isOpen e o children para utilizar dentro da função
export const ModalCreateTeam = ({isOpen, children, setModalClose}) => {

    // Estados do formulário
    const [leaderId, setLeaderId] = useState("");
    const [projectId, setProjectId] = useState("");
    const [department, setDepartment] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o formulário");
        console.log(leaderId, projectId, department, description);

        // Limpar o forms
        setLeaderId("");
        setProjectId("");
        setDepartment("");
        setDescription("");

        // fechar após enviar
        setModalClose();
    }

    if(isOpen){
        return(
            //children para indicar que posso modificar o modal dentro do arquivo que foi chamado
            <div className={style.modalBG}>
                <div className={style.mainBox}>
                    <div className={style.content}>
                        <h2>Create new team</h2>

                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Leader ID:</label>
                                <input 
                                    type="text" 
                                    className={style.inputN} 
                                    placeholder="Insert the Id from the project leader" 
                                    value={leaderId} 
                                    onChange={(e) => setLeaderId(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Project ID:</label>
                                <input 
                                    type="text" 
                                    className={style.inputN} 
                                    placeholder="Insert the Id from the project" 
                                    value={projectId} 
                                    onChange={(e) => setProjectId(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Department:</label>
                                <select 
                                    className={style.inputN} 
                                    placeholder="Insert the department pf the team" 
                                    value={department} 
                                    onChange={(e) => setDepartment(e.target.value)}
                                >
                                    <option value="">Select the department:</option>
                                    <option value="dev">Development</option>
                                    <option value="design">Design</option>
                                    <option value="hr">Human resources</option>
                                </select>                               
                            </div>
                            <div>
                                <label>Description:</label>
                                <textArea
                                    className={style.inputN}
                                    name="Description"                            
                                    placeholder="Insert the description of the team" 
                                    value={description} 
                                    onChange={(e) => setDescription(e.target.value)}
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
                                    Create team
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return null
}