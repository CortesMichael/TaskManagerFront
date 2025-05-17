import style from "./NavBar.module.css"

export const NavBar = () => {
    return(
        <header>
            <div className={style.icon}>
                <img src="./Group.svg" alt="" />
            </div>
            <div className={style.btns}>
                <button className={style.btnLogout}>Logout</button>
                <button className={style.btnCreate}>Create Team</button>
            </div>
        </header>
    );
}