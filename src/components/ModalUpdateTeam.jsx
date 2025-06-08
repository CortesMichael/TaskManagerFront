import { useState } from 'react'
import style from "./ModalCreate.module.css"

export const ModalUpdateTeam = ({isOpen, children, setModalClose}) => {

    const [leaderID, setLeaderID] = useState("");
    const [projectID, setProjectID] = useState("");
    const [departament, setDepartament] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Atualizando a equipe");
        console.log(leaderID, departament, description);

        setLeaderID("");
        setDepartament("");
        setDescription("");
        setProjectID("");
        
        setModalClose();
    }

        if(isOpen){
            return(
                <div className={style.modalBG}>
                    <div className={style.mainBox}>
                        <div className={style.content}>
                            <h2>Update Team</h2>

                            <form onSubmit={handleSubmit}>

                                <div>
                                    <label>Leader ID:</label>
                                    <input 
                                    type="text"
                                    className={style.inputN}
                                    placeholder="Update the project leader ID" 
                                    value={leaderID} 
                                    onChange={(e) => setLeaderID(e.target.value)}/>
                                </div>

                                <div>
                                    <label>Departament:</label>
                                    <select className={style.inputN}
                                    placeholder="Update the departament"
                                    value={departament}
                                    onChange={(e) => setDepartament(e.target.value)}>

                                    <option value="">Select the departament</option>
                                    <option value="dev">Development</option>
                                    <option value="design">Design</option>
                                    <option value="hr">Human resources</option>
                                    </select>
                                </div>

                                <div>
                                    <label>Description</label>
                                    <textArea 
                                        className={style.inputN}
                                        name="Description"
                                        placeholder="Update the description of the team"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                            
                                <div className={style.boxClose}>
                                    <button
                                    type="button"
                                    onClick={setModalClose}
                                    className={style.buttonClose}
                                    style={{marginRight: "10px"}}>
                                    Cancel
                                    </button>

                                    <button
                                    type="submit"
                                    className={style.buttonClose}>
                                    Update Team
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