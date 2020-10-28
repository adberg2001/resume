import React from "react";
import style from "./experience.module.css";
import location from "../../../items/links/address.png";
import oxford from "../../../items/oxford.png";
import cornelia from "../../../items/cornelia_deluxe_resort_logo.png";

function Experience() {
    const titleStock = [{
            id: 1,
            year: "2018-2019",
            h4: "Robotics teacher",
            logoSrc: oxford,
            logoBg: "unset",
            p: "Oxford International School",
            ul: [
                { id: 1, li: "Instructed elementary school children in basic programming and engineering" },
                { id: 2, li: "Overall responsibility for all robotic related applications on the shop floor" },
                { id: 3, li: "Curriculum planning." },
                { id: 4, li: "Assurance of parent satisfaction and child safety." },
                { id: 5, li: "Perform any other assignments from time-to-time as management so directs" },
                { id: 6, li: "Create and strive a positive teach environment by demonstrating and sharing functional and technical knowledge" },
                {
                    id: 7,
                    li: "Provide technical support to robot operators through system troubleshooting and" +
                        " diagnostics"
                },
            ],
            addressHref: "https://www.google.com/maps/place/Oxford+Bishkek/@42.8324699,74.5821767,16.7z/data=!4m5!3m4!1s0x389ec9dbf2f49ff5:0xe8b445dfec16a1e3!8m2!3d42.8325328!4d74.5844668",
            address: "Bishkek/Kyrgyzstan",
        },
        {
            id: 2,
            year: "08.2020-10.2020",
            h4: "Front-end teacher",
            logoSrc: cornelia,
            logoBg: "",
            p: "IT Run Kids",
            ul: [
                { id: 1, li: "Collaborated with colleagues in addressing teaching and research issues." },
                { id: 2, li: "Participated in campus and community events." },
                { id: 3, li: "Maintained student attendance records, grades, and other required records." },
                { id: 4, li: "Implemented instructional activities for a meaningful learning experience." },
                { id: 5, li: "Collaborated with peers to enhance the instructional environment." },
                { id: 6, li: "Established and maintained cooperative working relationships." },
                { id: 7, li: "Assumed responsibility for meeting performance goals." },
                { id: 8, li: "Managed to meets professional obligations through efficient work habits." },
                { id: 9, li: "Demonstrated strong content knowledge and a continuing interest in the subject." },
            ],
            addressHref: "https://g.page/IT-Run?share",
            address: "Bishkek/Kyrgyzstan",
        },
    ];
    return ( < div className = { style.mainCont } > {
            titleStock.map(job => ( <
                div key = { job.id }
                className = { style.job } >
                <
                div className = { style.header } >
                <
                div className = { style.year } > { job.year } < /div> <
                h4 className = { style.h3 } > { job.h4 } < /h4> < /
                div > <
                div className = { style.title } >
                <
                img src = { job.logoSrc }
                style = {
                    { backgroundColor: job.logoBg }
                }
                className = { style.logo }
                alt = "logo.png" / >
                <
                p className = { style.p } > { job.p } < /p> <
                ul > {
                    job.ul.map(li => ( <
                        li className = { style.li }
                        key = { li.id } > { li.li } < /li>
                    ))
                } <
                /ul> <
                a target = "blank"
                rel = "noopener"
                href = { job.addressHref } >
                <
                span className = { style.address } >
                <
                img className = { style.img }
                src = { location }
                alt = "location.png" / > { job.address } <
                /span> < /
                a > <
                /div> < /
                div >
            ))
        } <
        /div>
    )
}

export default Experience;