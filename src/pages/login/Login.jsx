import { useUserContext } from "../../context/UserContext";
import style from "./Login.module.css"

export const Login = () => {

    const {loggedUser} = useUserContext();

    return(
        <div className={style.page}>
            <h1>
                {loggedUser == null && "funcionou!!"}
            </h1>
        </div>
    );
}