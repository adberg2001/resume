import React from "react";
import style from "./education.module.css";
import location from "../../../items/links/address.png"

function Education() {
    return ( <
        div className = { style.mainCont } >
        <
        div >
        <
        div className = { style.header } >
        <
        div className = { style.year } > 2018 - 2023 < /div> <
        h4 className = { style.h3 } >
        Bachelor in International Economy <
        /h4> < /
        div > <
        div className = { style.title } >
        <
        p className = { style.p } > Jusup Balasagyn Kyrgyz State University <
        /p> <
        a target = "blank"
        rel = "noopener"
        href = "https://www.google.com/maps/place/%D0%9A%D1%8B%D1%80%D0%B3%D1%8B%D0%B7%D1%81%D0%BA%D0%B8%D0%B9+%D0%9D%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82+%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8+%D0%96%D1%83%D1%81%D1%83%D0%BF%D0%B0+%D0%91%D0%B0%D0%BB%D0%B0%D1%81%D0%B0%D0%B3%D1%8B%D0%BD%D0%B0/@42.8823804,74.5849177,17z/data=!3m1!4b1!4m5!3m4!1s0x389ec81bf79c52b1:0xbe5200874d51edf6!8m2!3d42.8823804!4d74.5871064" >
        <
        span className = { style.address } > < img className = { style.img }
        src = { location }
        alt = "location.png" / > Bishkek / Kyrgyzstan < /span> < /
        a > <
        /div> < /
        div > <
        div >
        <
        div className = { style.header } >
        <
        div className = { style.year } > 2019 - 2020 < /div> <
        h4 className = { style.h3 } >
        Front - end development <
        /h4> < /
        div > <
        div className = { style.title } >
        <
        p className = { style.p } > IT academy <
        /p> <
        a target = "blank"
        rel = "noopener"
        href = "https://goo.gl/maps/9uceYsRZ61sb4ND38" >
        <
        span className = { style.address } > < img className = { style.img }
        src = { location }
        alt = "location.png" / > Bishkek / Kyrgyzstan < /span> < /
        a > <
        /div> < /
        div > <
        /div>
    )
}

export default Education;