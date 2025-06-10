import style from "./Teams.module.css"
import { NavBar } from '../../components/NavBarProject';
import React from 'react'

export const Teams = () => {
    const handleTeamClick = (TeamName) => {
        console.log(`Team clicked: ${TeamName}`);
    };

  return (
    <div className={style.teamsContainer}>
        <NavBar />   
        <main className={style.teamsContent}>
            <section className={style.teamsSection}>
                <h2>Teams from (Project)</h2>
                <div className={style.teamsGrid}>
                    {['Equipe1', 'Equipe2', 'Equipe3'].map((teams, index) => (
                        <div 
                            key={index} 
                            className={style.teamsCard}
                            onClick={() => handleTeamClick(teams)}
                        >
                            <p>{teams}</p>                         
                        </div>
                    ))}
                </div>
            </section>
        </main>
    </div>
  )
}

