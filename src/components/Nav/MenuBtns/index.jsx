import React from "react";
import style from "./menu.module.css";

function Menu() {
    return (
        <div className={style.menuBtn}>
            <div className={style.menuFirst}></div>
            <div className={style.menuSecond}></div>
            <div className={style.menuThird}></div>
        </div>
    )
}

export default Menu;