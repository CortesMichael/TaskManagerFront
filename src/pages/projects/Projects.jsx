import style from "./Projects.module.css"
import { NavBar } from '../../components/NavBar';
import React from 'react'

export const Projects = () => {
    const handleProjectClick = (projectName) => {
        console.log(`Project clicked: ${projectName}`);
    };

  return (
    <div className={style.projectsContainer}>
        <NavBar />   
        <main className={style.projectsContent}>
            <section className={style.projectsSection}>
                <h2>Your Projects</h2>
                <div className={style.projectsGrid}>
                    {['Projeto1', 'Projeto2'].map((project, index) => (
                        <div 
                            key={index} 
                            className={style.projectsCard}
                            onClick={() => handleProjectClick(project)}
                        >
                            <p>{project}</p>                         
                        </div>
                    ))}
                </div>
            </section>
        </main>
    </div>
  )
}

