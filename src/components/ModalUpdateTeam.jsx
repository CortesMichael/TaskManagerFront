import { useState } from 'react'
import style from "./ModalCreate.module.css"
import { useEffect } from 'react';
import api from '../api/api';

export const ModalUpdateTeam = ({isOpen, children, setModalClose, equipId}) => {

    // valores iniciais
    const [equipData, setEquipData] = useState(null);

    // começam com os valores iniciais para fazer a verificação depois 
    const [newLeaderID, setNewLeaderID] = useState("");
    const [newProjectID, setNewProjectID] = useState("");
    const [newDepartament, setNewDepartament] = useState("");
    const [newDescription, setNewDescription] = useState("");

    const fetchData = async () => {
        try {
            const response = await api.get(`/equip/${equipId}`);
            setEquipData(response.data);
            setNewLeaderID(response.data.leaderId);
            setNewProjectID(response.data.projectId);
            setNewDepartament(response.data.departament);
            setNewDescription(response.data.description);
        } catch (error) {
            console.error("Erro ao buscar equipe:", error);
        }
    }
   
    useEffect(() => {
        fetchData();
    }, [])

    const handleNewLeaderIDChange = (e) => {
        setNewLeaderID(e.target.value);
    }
    const handleNewProjectIDChange = (e) => {
        setNewProjectID(e.target.value);
    }
    const handleNewDepartamentChange = (e) => {
        setNewDepartament(e.target.value);
    }
    const handleNewDescriptionChange = (e) => {
        setNewDescription(e.target.value);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        const data = {}
        data.id = equipId;
        if(newLeaderID != equipData.leaderId){
            data.leaderId = newLeaderID;
        }
        if(newProjectID != equipData.projectId){
            data.projectId = newProjectID;
        }
        if(newDepartament != equipData.departament){
            data.departament = newDepartament;
        }
        if(newDescription != equipData.description){
            data.description = newDescription;
        }

        try{
            const response = await api.put(`/equip/${equipId}`, data);
            console.log("Equipe atualizada com sucesso");
            setModalClose();
            console.log(newDescription);
        } catch (error) {
            console.log(error);
        }

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
                                    value={newLeaderID} 
                                    onChange={(e) => setNewLeaderID(e.target.value)}/>
                                </div>

                                <div>
                                    <label>Departament:</label>
                                    <select className={style.inputN}
                                    placeholder="Update the departament"
                                    value={newDepartament}
                                    onChange={(e) => setNewDepartament(e.target.value)}>

                                    <option value="">Select the departament</option>
                                    <option value="dev">Development</option>
                                    <option value="design">Design</option>
                                    <option value="hr">Human resources</option>
                                    </select>
                                </div>

                                <div>
                                    <label>Description</label>
                                    <textarea 
                                        className={style.inputN}
                                        name="Description"
                                        placeholder="Update the description of the team"
                                        value={newDescription}
                                        onChange={(e) => setNewDescription(e.target.value)}
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