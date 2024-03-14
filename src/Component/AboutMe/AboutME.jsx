import React from "react";
import style from "./AboutMe.module.css"

export default function AboutMe() {
    return (

        <div className={style.container2}>

            <div id={style.AboutMeDiv}>
                <div id={style.AboutMeSpan}><span>ABOUT ME</span></div>                <div id="AboutMeWrap">
                    <p>
                        Hi there, my name is Ilesanmi Atinuke, <br />
                        A seasoned web Developer with a passion for crafting. <br />
                        As a passionate and dedicated professional individual,
                        I am highly motivated to create functional and visually appealing websites.
                        With expertise in user interface design and problem-solving, 
                        I excel at utilizing HTML, CSS,and JavaScript to enhance user experiences and address their
                        needs.
                        I have a deep understanding of how to design and implement intuitive interfaces 
                        that facilitate smooth navigation and engage users effectively. 
                        Constantly staying updated with the latest trends and best practices, 
                        I am committed to delivering high-quality websites that exceed client expectations.
                    </p>
                </div>
            </div>
        </div>
)
}
