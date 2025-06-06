import style from "./ModalCreate.module.css"
import { useState } from "react";
import api from "../api/api";
import { useUserContext } from "../context/UserContext";

//importa o método isOpen e o children para utilizar dentro da função
export const ModalCreateTeam = ({isOpen, children, setModalClose}) => {
    const { loggedUser } = useUserContext();

    // Estados do formulário
    const [leaderId, setLeaderId] = useState("");
    const [projectId, setProjectId] = useState("");
    const [department, setDepartment] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!loggedUser) {
            setError("Você precisa estar logado para criar uma equipe");
            return;
        }

        try {
            console.log("Enviando dados:", {
                leaderId,
                projectId,
                departament: department,
                description
            });

            const response = await api.post("/equip", {
                leaderId,
                projectId,
                departament: department,
                description
            });

            console.log("Resposta do servidor:", response);

            if (response.status === 200) {
                // Limpar o forms
                setLeaderId("");
                setProjectId("");
                setDepartment("");
                setDescription("");
                // fechar após enviar
                setModalClose();
            }
        } catch (err) {
            console.error("Erro completo:", err);
            setError(err.response?.data || "Erro ao criar equipe");
        }
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
                                    placeholder="Insert the department of the team" 
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
                                <textarea
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