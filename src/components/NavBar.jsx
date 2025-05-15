import style from "./NavBar.module.css"

export const NavBar = () => {
    return(
        <navbar className={style.navBar}>
            <div className={style.icon}>
                {/* <img src="./Group.svg" alt="" /> */}
            </div>
            <div className={style.btns}>
                <button className={style.btnCreate}></button>
            </div>
        </navbar>
    );
}