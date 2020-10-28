import React from "react";
import style from "./skills.module.css";
import HardSkills from "./HardSkills";
import Lang from "./Language";

function Skills() {
    const outsideInterest = [
        {id: 1, text: "Hiking"},
        {id: 2, text: "Video games"},
        {id: 3, text: "Acting"},
        {id: 4, text: "Music"},

    ];
    return (
        <div className={style.mainCont}>
            <HardSkills/>
            <Lang/>
            <div className={style.cont}>
                <h4 className={style.h3}>Outside interest</h4>
                <div className={style.title}>
                    {
                        outsideInterest.map((s) => (
                                <div key={s.id} className={style.cell3}>
                                    <div className={style.cellTitle}>
                                        <h5 className={style.h5}>{s.text}</h5>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills;
