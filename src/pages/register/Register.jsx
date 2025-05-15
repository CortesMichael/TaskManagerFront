import style from "./Register.module.css";

export const Register = () => {
    return(
        <div className={style.pageRegister}>
            <div className={style.pageFormRegister}>
                <div className={style.BoxRegister}>
                    <img src="/logo.png" alt="Logo TaskManager" />
                    <p>Register</p>
                </div>
                <div className={style.BoxNameR}>
                    <label>Name:</label>
                    <input type="text" paceholder=""/>
                </div>
                <div className={style.BoxEmailR}>
                    <label>E-mail:</label>
                    <input type="text" placeholder=""/>
                </div>
                <div className={style.BoxPasswordR}>
                    <label>Senha:</label>
                    <input type="password" placeholder=""/>
                </div>
                <button className={style.buttonR} type="submit">Confirmar</button>
                <div className={style.MiniLetters}>
                    <p>Already have an account? <a href="http://localhost:5173">Login</a></p>
                </div>
            </div>
        </div>
    );
}