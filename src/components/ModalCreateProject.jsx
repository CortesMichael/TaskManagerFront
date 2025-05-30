import style from "./ModalCreate.module.css"
import { useState } from "react";

//importa o método isOpen e o children para utilizar dentro da função
export const ModalCreateProject = ({isOpen, children, setModalClose}) => {

    // Estados do formulário
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [goals, setGoals] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
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
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Goals:</label>
                                <input 
                                    type="text" 
                                    className={style.inputN} 
                                    placeholder="Insert the goals you want to reach with the project" 
                                    value={goals} 
                                    onChange={(e) => setGoals(e.target.value)}
                                />
                            </div> 
                            <div>
                                <label>Description:</label>
                                <textArea
                                    className={style.inputN}
                                    name="Description"                            
                                    placeholder="Insert the description of the project" 
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