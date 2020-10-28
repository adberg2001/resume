import React from "react";
import PageWrapper from "../PageWrapper/index";
import style from './contact.module.css';
import facebook from "../../items/links/Facebook_Logo.png"
import git from "../../items/links/github_PNG.png"
import inst from "../../items/links/instagram.png"
import mail from "../../items/links/Gmail_Icon.png"
import linkedIn from "../../items/links/linkedIn_PNG38.png"
import telegram from "../../items/links/Telegram.png"
import whatsApp from "../../items/links/whatsapp.png"
import address from "../../items/links/address.png"
import phone from "../../items/links/tele.png"

function Contact() {
    const contactList = [
        { id: 1, src: facebook, alt: "logoTelegram.png", href: "#", text: "#########" },
        { id: 2, src: git, alt: "git.png", href: "https://github.com/adberg2001", text: "adberg2001" },
        { id: 3, src: mail, alt: "@mail.png", href: "https://aaaadyl.erg@gmail.com", text: "aaaadyl.erg@gmail.com" },
        {
            id: 4,
            src: inst,
            alt: "instagram.png",
            href: "https://www.instagram.com/voyageoor",
            text: "voyageoor"
        },
        {
            id: 5,
            src: linkedIn,
            alt: "linkedIn.png",
            href: "https://www.linkedin.com/in/adylbek-ergeshov-a7800a1aa",
            text: "Adylbek Ergeshov"
        },
        { id: 6, src: telegram, alt: "telegram.png", href: "https://T.me/adberg_miron/", text: "adberg_miron" },
        { id: 7, src: whatsApp, alt: "whatsApp.png", href: "https://wa.me/996775607075", text: "+(996)775-60-70-75" },
        {
            id: 8,
            src: address,
            alt: "location.png",
            href: "https://www.google.com/maps/place/%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA/@42.8767897,74.4517772,11z/data=!3m1!4b1!4m5!3m4!1s0x389eb7dc91b3c881:0x492ebaf57cdee27d!8m2!3d42.8746212!4d74.5697617",
            text: "Bishkek,\nKyrgyzstan"
        },
        {
            id: 9,
            src: phone,
            alt: "phone.png",
            href: "tel:+(996)775-60-70-75",
            text: "+(996)775-60-70-75"
        },
    ];

    return ( <
        PageWrapper >
        <
        div className = { style.cont } > {
            contactList.map((cell) => ( <
                a target = "_blank"
                rel = "noopener noreferrer"
                href = { cell.href }
                className = { style.title }
                key = { cell.id } >
                <
                img src = { cell.src }
                alt = { cell.alt }
                className = { style.img }
                /> <
                p className = { style.link } > { cell.text } < /p> < /
                a >
            ))
        } <
        /div> < /
        PageWrapper >
    )
}

export default Contact;