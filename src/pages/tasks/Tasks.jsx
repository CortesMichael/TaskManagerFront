import style from "./Tasks.module.css"
import { NavBar } from '../../components/NavBarTask';
import React from 'react'

export const Tasks = () => {
    const handleTaskClick = (taskName) => {
        console.log(`Task clicked: ${taskName}`);
    };

    const [dataList, setDataList] = useState([]);

    return (
        <div className={style.tasksContainer}>
            <NavBar />   
            <main className={style.tasksContent}>
                <section className={style.tasksSection}>
                    <h2>Tasks from (Team)</h2>
                    <div className={style.tasksGrid}>
                        {dataList.length == 0 && <p>Nenhum task encontrado</p>}
                        {dataList.map((task, index) => (
                            <div 
                                key={index} 
                                className={style.tasksCard}
                                onClick={() => handleTaskClick(task)}
                            >
                                <p>{task}</p>                         
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
