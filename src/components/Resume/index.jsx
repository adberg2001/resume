import React from "react";
import PageWrapper from "../PageWrapper/index";
import style from './resume.module.css'
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./skills";

function Resume() {
    const pageCell = [
        { id: 1, element: < Education />, text: "education", border: false },
        { id: 2, element: < Experience />, text: "experience", border: true },
        { id: 3, element: < Skills />, text: "skills", border: false },
    ];
    return (
        <PageWrapper>
            <div className={style.mainCont} > {
                pageCell.map(el => (
                    <div key={el.id}
                        className={style.cont} >
                        <div className={style.wrapper} >
                            <div className={el.border ? style.border : ""} > </div>
                            <div className={style.titleCont} >
                                <h3 className={style.h3} > {el.text} </h3>
                                <div className={style.title} > {el.element}
                            </div>
                            </div>
                            <div className={el.border ? style.border : ""} > </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </PageWrapper>
    )
}

export default Resume;