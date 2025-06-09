import style from './Home.module.css';
import { NavBar } from '../../components/NavBar';
import { useEffect, useState } from 'react';
import { ModalCreateTeam } from "../../components/ModalCreateTeam";
import { ModalUpdateProject } from "../../components/ModalUpdateProject";
import { ModalUpdateTeam } from "../../components/ModalUpdateTeam";
import { ModalCreateTask } from "../../components/ModalCreateTask";
import { useUserContext } from '../../context/UserContext';
import api from '../../api/api';

export const Home = () => {

    const { userRole } = useUserContext();
    const [dataList, setDataList] = useState([]);

    const fetchData = async () => {
        if(userRole == "MNG"){
            const response = await api.get("/project/all-my-projects");
            setDataList(response.data);
        } else if(userRole == "DEV"){
            const response = await api.get("/equip/dev");
            setDataList(response.data);
        }
        try{
            const response = await api.get("/project/all-my-projects");
            setDataList(response.data);
        } catch {
            
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleTeamClick = (teamName) => {
        console.log(`Team clicked: ${teamName}`);
    };

    const handleTaskClick = (taskName) => {
        console.log(`Task clicked: ${taskName}`);
    };

    const [modals, setModals] = useState({
        // inserir função dos modais
        team: false,
        updateTeam: false,
        task: false,
    });

    // abre / fecha os modais
    const toggleModal = (modalName) => {
        setModals(prev => ({ ...prev, [modalName]: !prev[modalName] }));
    };

    return (
        <div className={style.homeContainer}>
            <NavBar />
            {userRole == "MNG" && 
                <main className={style.homeContent}>
                <section className={style.teamsSection}>
                    <h2>Your Projects</h2>
                    <div className={style.teamsGrid}>
                        {dataList.length == 0 && <p>Nenhum projeto encontrado</p>}
                        {dataList.map((team, index) => (
                            <div 
                                key={index} 
                                className={style.teamCard}
                                onClick={() => handleTeamClick(team)}
                            >
                                <p>{team.name}</p>                         
                            </div>
                        ))}
                    </div>
                </section>

                <div className={style.divider}></div>
                <button onClick={() => toggleModal('team')}>criar equipe</button>
                <button onClick={() => toggleModal('updateTeam')}>atualizar equipe</button>
                <button onClick={() => toggleModal('task')}>criar tarefa</button>
                <ModalCreateTeam isOpen={modals.team} setModalClose={() => toggleModal('team')} />
                <ModalCreateTask isOpen={modals.task} setModalClose={() => toggleModal('task')} />
                <ModalUpdateTeam equipId="TEAM-2025060819435952" isOpen={modals.updateTeam} setModalClose={() => toggleModal('updateTeam')} />

                <section className={style.tasksSection}>
                    <h2>Next Tasks</h2>
                    <div className={style.tasksList}>
                        {['Task1', 'Task2', 'Task3'].map((task, index) => (
                            <div 
                                key={index} 
                                className={style.taskCard}
                                onClick={() => handleTaskClick(task)}
                            >
                                <p className={style.taskTitle}>{task}</p>
                                <p className={style.taskTeam}>Equipe{index + 1}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>  
            }

            {userRole == "DEV" && 
                <main className={style.homeContent}>
                <section className={style.teamsSection}>
                    <h2>Your Equips</h2>
                    <div className={style.teamsGrid}>
                        {dataList.length == 0 && <p>Nenhuma equipe encontrado</p>}
                        {dataList.map((team, index) => (
                            <div 
                                key={index} 
                                className={style.teamCard}
                                onClick={() => handleTeamClick(team)}
                            >
                                <p>{team.departament}</p>                         
                            </div>
                        ))}
                    </div>
                </section>

                <div className={style.divider}></div>
                <button onClick={() => toggleModal('team')}>modal criar equipe</button>
                <button onClick={() => toggleModal('updateTeam')}>modal atualizar equipe</button>
                <button onClick={() => toggleModal('task')}>modal criar tarefa</button>
                <ModalCreateTeam isOpen={modals.team} setModalClose={() => toggleModal('team')} />
                <ModalUpdateTeam isOpen={modals.updateTeam} setModalClose={() => toggleModal('updateTeam')} />
                <ModalCreateTask isOpen={modals.task} setModalClose={() => toggleModal('task')} />

                <section className={style.tasksSection}>
                    <h2>Next Tasks</h2>
                    <div className={style.tasksList}>
                        {['Task1', 'Task2', 'Task3'].map((task, index) => (
                            <div 
                                key={index} 
                                className={style.taskCard}
                                onClick={() => handleTaskClick(task)}
                            >
                                <p className={style.taskTitle}>{task}</p>
                                <p className={style.taskTeam}>Equipe{index + 1}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>  
            }
            
        </div>
    );
};