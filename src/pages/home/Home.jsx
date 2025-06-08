import style from './Home.module.css';
import { NavBar } from '../../components/NavBar';
import { useState } from 'react';
import { ModalCreateTeam } from "../../components/ModalCreateTeam";
import { ModalUpdateProject } from "../../components/ModalUpdateProject";

export const Home = () => {
    const handleTeamClick = (teamName) => {
        console.log(`Team clicked: ${teamName}`);
    };

    const handleTaskClick = (taskName) => {
        console.log(`Task clicked: ${taskName}`);
    };

    const [modals, setModals] = useState({
        // inserir função dos modais
        team: false,
    });

    // abre / fecha os modais
    const toggleModal = (modalName) => {
        setModals(prev => ({ ...prev, [modalName]: !prev[modalName] }));
    };

    return (
        <div className={style.homeContainer}>
            <NavBar />

            <main className={style.homeContent}>
                <section className={style.teamsSection}>
                    <h2>Your Projects</h2>
                    <div className={style.teamsGrid}>
                        {['Projeto1', 'Projeto2', 'Projeto3'].map((team, index) => (
                            <div 
                                key={index} 
                                className={style.teamCard}
                                onClick={() => handleTeamClick(team)}
                            >
                                <p>{team}</p>                         
                            </div>
                        ))}
                    </div>
                </section>

                <div className={style.divider}></div>
                <button onClick={() => toggleModal('team')}>modal criar equipe</button>
                <ModalCreateTeam isOpen={modals.team} setModalClose={() => toggleModal('team')} />

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
        </div>
    );
};