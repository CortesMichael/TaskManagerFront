import { useState } from "react";
import style from "./ModalCreate.module.css"


export const ModalUpdateProject = ({isOpen, children, setModalClose}) => {

    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [goals, setGoals] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Atualizando o formulário");
        console.log(description, name, goals);

        setDescription("");
        setName("");
        setGoals("");

        setModalClose();
    }

    if(isOpen){
        return(
            <div className={style.modalBG}>
                <div className={style.mainBox}>
                    <div className={style.content}>
                        <h2>Update Project</h2>

                        <form onSubmit={handleSubmit}>

                            <div>
                                <label>Project Name:</label>
                                <input type="text" 
                                className={style.inputN} 
                                placeholder="Update the name of the project" 
                                value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>

                            <div>
                                <label>Goals:</label>
                                <input type="text" 
                                className={style.inputN} 
                                placeholder="Update your project goals" 
                                values={goals} onChange={(e) => setGoals(e.target.value)} />
                            </div>

                            <div>
                                  <label>Description:</label>
                                <textArea 
                                    className={style.inputN}
                                    name="description"
                                    placeholder="Update the description of the project"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>

                            <div className={style.boxClose}>
                                <button type="button" onClick={setModalClose} 
                                className={style.buttonClose} 
                                style={{ marginRight: "10px" }}>Cancel</button>

                                <button type="submit" 
                                className={style.buttonClose}>Confirm Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return null
 
}