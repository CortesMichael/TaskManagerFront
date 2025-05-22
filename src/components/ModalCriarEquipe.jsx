import style from "./ModalCriarEquipe.module.css"

//importa o método isOpen e o children para utilizar dentro da função
export const Modal = ({isOpen, children, setModalClose}) => {

    if(isOpen){
        return(
            //children para indicar que posso modificar o modal dentro do arquivo que foi chamado
            <div className={style.modalBG}>
                <div className={style.mainBox}>
                    {children}
                    <div className={style.content}>
                        <label>Name:</label>
                        <input type="text" className={style.inputN}/>
                    </div>
                    <div className={style.boxClose}><button onClick={setModalClose} className={style.buttonClose}>Close</button></div>
                </div>
            </div>
        );
    }

    return null
}