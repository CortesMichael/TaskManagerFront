import style from './Home.module.css';
import { NavBar } from '../../components/NavBar';
import { useState } from 'react';
import { ModalUpdateTeam } from "../../components/ModalUpdateTeam";
import { ModalUpdateProject } from "../../components/ModalUpdateProject";

export const Home = () => {
    // Funções de clique para demonstrar a interatividade
    const handleTeamClick = (teamName) => {
        console.log(`Team clicked: ${teamName}`);
        // Aqui você implementará a navegação ou exibição de detalhes
    };

    const handleTaskClick = (taskName) => {
        console.log(`Task clicked: ${taskName}`);
        // Aqui você implementará a navegação ou exibição de detalhes
    };

    return (
        <div className={style.homeContainer}>
            <NavBar />

            <main className={style.homeContent}>
                <section className={style.teamsSection}>
                    <h2>Your Teams</h2>
                    <div className={style.teamsGrid}>
                        {['Equipe1', 'Equipe2', 'Equipe3', 'Equipe4', 'Equipe5'].map((team, index) => (
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