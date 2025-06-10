import style from "./Teams.module.css"
import { useState } from 'react';
import { NavBar } from '../../components/NavBarTeam';
import React from 'react'

export const Teams = () => {

    const [dataList, setDataList] = useState([]);

    const handleTeamClick = (TeamName) => {
        console.log(`Team clicked: ${TeamName}`);
    };

    const [modals, setModals] = useState({
        // inserir função dos modais
        updateTeam: false,
    });

    // abre / fecha os modais
    const toggleModal = (modalName) => {
        setModals(prev => ({ ...prev, [modalName]: !prev[modalName] }));
    };

  return (
    <div className={style.teamsContainer}>
        <NavBar />   
        <main className={style.teamsContent}>
            <section className={style.teamsSection}>
                <h2>Teams from {dataList.name}</h2>
                <div className={style.teamsGrid}>
                    {dataList.length == 0 && <p>Nenhuma equipe encontrado</p>}
                    {dataList.map((teams, index) => (
                        <div 
                            key={index} 
                            className={style.teamsCard}
                            onClick={() => toggleModal('updateTeam')}
                        >
                            <p>{teams.name}</p>                         
                        </div>
                    ))}
                </div>
            </section>
        </main>
    </div>
  )
}

