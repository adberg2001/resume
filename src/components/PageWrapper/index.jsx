import React from "react";
import Nav from "../Nav/index";
import style from "./pageWrapper.module.css"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { setIsOpen } from "../../redux/action"

function PageWrapper({ children }) {
    const navArray = [
        { id: 1, to: "/", text: "about"},
        { id: 2, to: "/resumePage", text: "resume"},
        { id: 3, to: "/contact", text: "contact"  },
        { id: 4, to: "/portfolio", text: "portfolio"  }
    ];
    const iconVariants = {
        opened: {
            top: 0
        },
        closed: {
            top: "-100vh"
        }
    }
    const dispatch = useDispatch(setIsOpen);

    const isOpen = useSelector(state => state.menu);
    const handleSetIsOpen = (e) => {
        e.preventDefault();
        setTimeout(() => {
            dispatch(setIsOpen(state=> !state))
        }, 40);
    }
    return (
        <div className={style.grid}>
            <motion.div className={style.menu}
                initial={false}
                variants={iconVariants}
                animate={isOpen ? "opened" : "closed"}
                onClick={e=>{handleSetIsOpen(e)}}
            >
                {
                    navArray.map(nav => (
                        <NavLink key={nav.id}
                            to={nav.to}
                            className={style.link}
                            activeClassName={style.active}
                            exact > { nav.text}
                        </NavLink>
                    ))
                }
            </motion.div>
            <div className={style.body}>
                <div className={style.template}>
                    <Nav />
                    <div className={style.body__title}>
                        <h1 className={style.body__h1}>
                            Adylbek <b>Erg</b>eshov
                        </h1>
                        <p className={style.body__p}><b>I'm</b> a <b>Front-end</b> developer</p>
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default PageWrapper;
