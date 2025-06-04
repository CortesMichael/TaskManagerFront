import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import style from "./Login.module.css"
import { useEffect } from "react";
import { ModalCreateTeam } from "../../components/ModalCreateTeam";
import { ModalCreateProject} from "../../components/ModalCreateProject";
import { ModalUpdateProject } from "../../components/ModalUpdateProject";
import { ModalUpdateTeam } from "../../components/ModalUpdateTeam";
import { useState } from 'react'
import api from "../../api/api";

export const Login = () => {

    const {setLoggedUser, setUserRole} = useUserContext();

    const [email, setEmail] = useState("");
    
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    } 

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await api.post('/auth/login', {
            "email": email, 
            "password": password
        })
        
        setLoggedUser(response.data.token);
        setUserRole(response.data.role); 
        
        console.log("DEU CERTO")
        }catch(error){
            console.log(error);
        }
    };

    const navigate = useNavigate(); //redireciona para outra rota

    const {loggedUser} = useUserContext();

    useEffect(() => {
        if(loggedUser != null) {
            navigate("/home")
        }
    }, [loggedUser]) //verifica se esta logado

    const [modals, setModals] = useState({
        // inserir função dos modais
        team: false,
        project: false,
        updateProject: false,
        updateTeam: false,
    });

    // abre / fecha os modais
    const toggleModal = (modalName) => {
        setModals(prev => ({ ...prev, [modalName]: !prev[modalName] }));
    };

    return(
        <div className={style.loginContainer}>
            <div className={style.loginCard}>
                <div className={style.loginHeader}>
                    <div className={style.loginLogo}>
                        <img src="Group.svg" alt="TaskManager Logo" />
                        <h1 className={style.loginTitle}>TaskManager</h1>
                    </div>
                    <p className={style.loginSubtitle}>Login</p>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className={style.loginFormGroup}>
                        <label className={style.loginLabel}>E-mail:</label>
                        <input className={style.loginInput} name="email" type="text" onChange={handleEmailChange} value={email} />
                    </div>
                    
                    <div className={style.loginFormGroup}>
                        <label className={style.loginLabel}>Password:</label>
                        <input className={style.loginInput} name="password" type="password" onChange={handlePasswordChange} value={password} />
                    </div>
                    
                    <button className={style.loginButton} type="submit">Login</button>
                </form>
                
                <div className={style.loginLinks}>
                    <p>Forgot your password? <a className={style.loginLink} href="#">Reset password</a></p>
                    <p>Doesn't have an account? <a className={style.loginLink} href="/register">Register</a></p>
                </div>
                
                <div className={style.loginDevTools}>
                    <button onClick={() => toggleModal('team')}>modal criar equipe</button>
                    <button onClick={() => toggleModal('project')}>modal criar projeto</button>
                    <button onClick={() => toggleModal('updateProject')}>modal atualizar projeto</button>
                    <button onClick={() => toggleModal('updateTeam')}>modal atualizar equipe</button>
                </div>
                
                <ModalCreateTeam isOpen={modals.team} setModalClose={() => toggleModal('team')} />
                <ModalCreateProject isOpen={modals.project} setModalClose={() => toggleModal('project')} />
                <ModalUpdateProject isOpen={modals.updateProject} setModalClose={() => toggleModal('updateProject')} />
                <ModalUpdateTeam isOpen={modals.updateTeam} setModalClose={() => toggleModal('updateTeam')} />

            </div>
        </div>
    );
}