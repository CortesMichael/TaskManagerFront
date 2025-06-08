import style from "./ModalCreate.module.css"
import { useState } from "react";
import api from "../api/api";
import { useUserContext } from "../context/UserContext";

export const ModalCreateTeam = ({isOpen, children, setModalClose}) => {

    const {loggedUser, setLoggedUser, userRole, setUserRole} = useUserContext();

    const [leaderId, setLeaderId] = useState("");
    const [projectId, setProjectId] = useState("");
    const [department, setDepartment] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    const handleLeaderIdChange = (e) => {
        setLeaderId(e.target.value);
    }

    const handleProjectIdChange = (e) => {
        setProjectId(e.target.value);
    }
    
    const handleDepartmentChange = (e) => {
        setDepartment(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await api.post("/equip", {
                "leaderId": leaderId,
                "projectId": projectId,
                "description": description, 
                "departament": department
            });
            console.log("Equipe criada com sucesso");

            setLeaderId("");
            setProjectId("");
            setDescription("");
            setDepartment("");

            setModalClose();

        } catch (error) {
            console.error("Erro ao criar equipe:", error);
        }
        console.log("Enviando o formulário");
        console.log(leaderId, projectId, description);
        
    }

    if(isOpen){
        return(
            //children para indicar que posso modificar o modal dentro do arquivo que foi chamado
            <div className={style.modalBG}>
                <div className={style.mainBox}>
                    <div className={style.content}>
                        <h2>Criar nova equipe</h2>
                        {error && <p className={style.error}>{error}</p>}

                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Leader ID:</label>
                                <input 
                                    type="text" 
                                    className={style.inputN} 
                                    placeholder="Insert the Id from the project leader" 
                                    value={leaderId} 
                                    onChange={handleLeaderIdChange}
                                />
                            </div>
                            <div>
                                <label>Project ID:</label>
                                <input 
                                    type="text" 
                                    className={style.inputN} 
                                    placeholder="Insert the Id from the project" 
                                    value={projectId} 
                                    onChange={handleProjectIdChange}
                                />
                            </div>
                            <div>
                                <label>Department:</label>
                                <select 
                                    className={style.inputN} 
                                    placeholder="Insert the department of the team" 
                                    value={department} 
                                    onChange={(e) => setDepartment(e.target.value)}
                                >
                                    <option value="dev">Development</option>
                                    <option value="design">Design</option>
                                    <option value="hr">Human resources</option>
                                
                                </select>                               
                            </div>
                            <div>
                                <label>Description:</label>
                                <textarea
                                    className={style.inputN}
                                    name="Description"                            
                                    placeholder="Insert the description of the team" 
                                    value={description} 
                                    onChange={handleDescriptionChange}
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