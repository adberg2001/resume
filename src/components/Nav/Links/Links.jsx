import React from "react";
import style from "./links.module.css"
import Insta from "../../../items/links/Instagram-icon-WHITE.png";
import Telegram from "../../../items/links/logoTelegram.png";
import Git from "../../../items/links/git.png";

function Links() {
    return (
        <div className={style.logo}>
            <p className={style.logo__text}>
                <b>ad</b>berg
            </p>
            <div className={style.links}>
                <div className={style.links__cont}>
                    <a target="_blank" rel="noopener noreferrer" className={style.linkImg}
                       href="https://www.instagram.com/voyageoor"><img
                        style={{borderRadius: "9px"}}
                        src={Insta} alt="instagram.png"/></a>
                    <a target="_blank" rel="noopener noreferrer" className={style.linkImg}
                       href="https://T.me/adberg_miron/"><img
                        style={{borderRadius: "50%"}}
                        src={Telegram} alt="telegram.png"/></a>
                    <a target="_blank" rel="noopener noreferrer" className={style.linkImg}
                       href="https://github.com/adberg2001"><img
                        style={{borderRadius: "50%"}}
                        src={Git} alt="github.png"/></a>
                </div>
            </div>
        </div>

    )
}

export default Links;
