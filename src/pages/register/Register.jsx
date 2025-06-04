import style from "./Register.module.css";
import { useState } from 'react';
import axios from 'axios';

export const Register = () => {

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

                <form>
                    <div className={style.registerFormGroup}>
                        <label className={style.registerLabel}>Name:</label>
                        <input type="text" name="name" className={style.registerInput} />
                    </div>
                    <div className={style.registerFormGroup}>
                        <label className={style.registerLabel}>Role:</label>
                        <select className={style.registerInput}>
                            <option value="">Select your role:</option>
                            <option value="dev">Developer</option>
                            <option value="manager">Manager</option>
                        </select>
                    </div>
                    <div className={style.registerFormGroup}>
                        <label className={style.registerLabel}>E-mail:</label>
                        <input type="text" name="email" className={style.registerInput} />
                    </div>
                    <div className={style.registerFormGroup}>
                        <label className={style.registerLabel}>Password:</label>
                        <input type="password" name="password" className={style.registerInput} />
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
