import React from "react";
import PageWrapper from "../PageWrapper/index";
import WIP from "../WIP";
import style from './portfolio.module.css'

function Portfolio() {
    return (
        <PageWrapper>
            <div className={style.mainCont}>
                <WIP/>
            </div>
        </PageWrapper>
    )
}

export default Portfolio;