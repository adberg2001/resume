import React from "react";
import style from "./skills.module.css";
import html from "../../../items/links/html.png";
import css from "../../../items/links/css.png";
import script from "../../../items/links/javascript.png";
import react from "../../../items/links/react-icon-png-7.png";
import json from "../../../items/links/json.png";
import figma from "../../../items/links/figma.png";
import postman from "../../../items/links/postman.png"
import bootstrap from "../../../items/links/bootstrap.png";
import vue from "../../../items/links/vue.png"

function HardSkills() {

    const hardSkills = [
        { id: 1, src: html, text: "HTML" },
        { id: 2, src: css, text: "CSS" },
        { id: 3, src: script, text: "JavaScript" },
        { id: 4, src: react, text: "React", },
        { id: 10, src: vue, text: "Vue" },
        { id: 8, src: postman, text: "Redux/Thunk" },
        { id: 5, src: json, text: "Ajax" },
        { id: 7, src: figma, text: "Figma", },
        { id: 9, src: bootstrap, text: "Bootstrap" },
    ];

    return ( <
        div className = { style.cont } >
        <
        h4 className = { style.h3 } > Hard skills < /h4> <
        div className = { style.title } > {
            hardSkills.map((s) => {
                return ( <
                    div key = { s.id }
                    className = { style.cell } >
                    <
                    div className = { style.cellTittle } >
                    <
                    img src = { s.src }
                    className = { style.img }
                    alt = { s.text + ".png" }
                    /> <
                    h5 className = { style.h5 } > { s.text } < /h5> < /
                    div > <
                    /div>
                )
            })
        } <
        /div> < /
        div >
    )
}

export default HardSkills;