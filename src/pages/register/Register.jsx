import style from "./Register.module.css";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from "../../api/api";

export const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [role, setRole] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/auth/register', {
                name,
                role,
                email,
                password
            });
            navigate("/");
        } catch (error) {
            console.error("Erro ao registrar:", error);
        }
    }

    return(
        <div className={style.registerContainer}>
            <div className={style.registerCard}>
                <div className={style.registerHeader}>
                    <div className={style.registerLogo}>
                        <img src="/Group.svg" alt="Engrenagem" />
                        <h1 className={style.registerTitle}>TaskManager</h1>
                    </div>
                    <p className={style.registerSubtitle}>Register</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className={style.registerFormGroup}>
                        <label className={style.registerLabel}>Name:</label>
                        <input 
                            type="text" 
                            name="name" 
                            className={style.registerInput}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={style.registerFormGroup}>
                        <label className={style.registerLabel}>Role:</label>
                        <select 
                            className={style.registerInput}
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="">Select your role:</option>
                            <option value="dev">Developer</option>
                            <option value="manager">Manager</option>
                        </select>
                    </div>
                    <div className={style.registerFormGroup}>
                        <label className={style.registerLabel}>E-mail:</label>
                        <input 
                            type="text" 
                            name="email" 
                            className={style.registerInput}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={style.registerFormGroup}>
                        <label className={style.registerLabel}>Password:</label>
                        <input 
                            type="password" 
                            name="password" 
                            className={style.registerInput}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className={style.registerButton} type="submit">Sign up</button>
                </form> 

                <div className={style.registerLinks}>
                    <p>Already have an account? <a href="/">Login</a></p>
                </div>
            </div>
        </div>
    );
}
