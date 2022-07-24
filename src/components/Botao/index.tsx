import React from "react";
import style from './style.module.scss';

type props = {
    children: React.ReactNode, 
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

const Botao = ({children, type = "button", onClick} : props) => {
    return(
        <button onClick={onClick} type={type} className={style.botao}>{children}</button>
    )
}

export default Botao