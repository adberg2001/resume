import React from "react";
import style from "./skills.module.css";

function Lang() {
    const softSkills = [
        { id: 1, text: "English", merge: "65%" },
        { id: 2, text: "Russian", merge: "95%" },
        { id: 3, text: "Turkish", merge: "80%" },

    ];

    return ( <
        div className = { style.cont } >
        <
        h4 className = { style.h3 } > Languages < /h4> <
        div className = { style.title } > {
            softSkills.map((s) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const [act, setAct] = React.useState("unset");
                const handleShow = () => {
                    act === "unset" || act === "1" ?
                        setAct("0") :
                        setAct("1")
                };
                return ( <
                    div onClick = { handleShow }
                    key = { s.id }
                    className = { style.cell2 } >
                    <
                    div style = {
                        act === "unset" || act === "1" ?
                        null : { opacity: act }
                    }
                    className = { style.cellTitle } >
                    <
                    h5 className = { style.h5 } > { s.text } < /h5> <
                    /div> <
                    div style = {
                        act !== "unset" ?
                        act === "1" ?
                        null : { width: "100%", opacity: "1" } : null
                    }
                    className = { style.rangeCont } >
                    <
                    div style = {
                        { width: `${s.merge}` } } > < span > level < br / > of < br / > knowledge < /span>{s.merge} <
                    /div> <
                    /div> <
                    /div>
                )
            })
        } <
        /div> <
        /div>
    )
}

export default Lang;