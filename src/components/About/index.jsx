import React from "react";
import PageWrapper from "../PageWrapper/index";
import style from './about.module.css';
import ava from "../../items/gallery/adsad.png"

function About() {
    return (
        <PageWrapper>
            <div className={style.mainCont}>
                <div className={style.imgCont} ><img src={ava} className={style.img} alt=""/></div>
                <p className={style.p}>Front-end is an integral part of technology. <b>Front-end</b> development <b>is a</b> tool of future that precise the <b>contrast of technology</b>.</p>
            </div>
        </PageWrapper>
    );
}

export default About;
