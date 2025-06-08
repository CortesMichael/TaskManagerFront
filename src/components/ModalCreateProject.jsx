import style from "./ModalCreate.module.css"
import { useState } from "react";
import api from "../api/api";

//importa o método isOpen e o children para utilizar dentro da função
export const ModalCreateProject = ({isOpen, children, setModalClose}) => {

    // Estados do formulário
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [goals, setGoals] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }
    const handleGoalsChange = (e) => {
        setGoals(e.target.value);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await api.post('/project', {
                "name": name,
                "description": description,
                "goals": goals
            });
        } catch (error) {
            console.error("Erro ao criar projeto:", error);
        }
        console.log("Enviando o formulário");
        console.log(name, description, goals);

        // Limpar o forms
        setName("");
        setDescription("");
        setGoals("");

        // fechar após enviar
        setModalClose();
    }

    if(isOpen){
        return(
            //children para indicar que posso modificar o modal dentro do arquivo que foi chamado
            <div className={style.modalBG}>
                <div className={style.mainBox}>
                    <div className={style.content}>
                        <h2>Create new project</h2>

                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Project name:</label>
                                <input 
                                    type="text" 
                                    className={style.inputN} 
                                    placeholder="Insert the name of the project" 
                                    value={name} 
                                    onChange={handleNameChange}
                                />
                            </div>
                            <div>
                                <label>Goals:</label>
                                <input 
                                    type="text" 
                                    className={style.inputN} 
                                    placeholder="Insert the goals you want to reach with the project" 
                                    value={goals} 
                                    onChange={handleGoalsChange}
                                />
                            </div> 
                            <div>
                                <label>Description:</label>
                                <textarea
                                    className={style.inputN}
                                    name="Description"                            
                                    placeholder="Insert the description of the project" 
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
                                    Create project
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