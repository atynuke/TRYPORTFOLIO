import React from 'react'
import style from "./Header.module.css"

export default function Header() {
    return (
        <>
        <div id={style.nav}>
            <div id={style.logo}>ILESANMI ATINUKE</div>
            <div id={style.links}>
                <span><a href="#AboutMeSpan">About Me</a></span>
                <span><a href="#Project">Projects</a></span>
                <span><a href="#Resume">Resume</a></span>
                <span><a href="#Contact">Contact Me</a></span>

            </div>

        </div>
        </>
    )
}