import React from 'react'
import style from "./Hero.module.css";
import picture from '../../assets/Picture.png';


export default function Hero() {
    return (
        <>
            <div id={style.container}>
                <div className={style.left}>
                    <div className={style.leftWrap}>
                        <span>Hello, my name is Ilesanmi Atinuke </span>
                    
                        <div> A Web Developer </div>
                        <p>
                            I am a passionate and dedicated professional with a strong
                            interest in creating functional and visiually appealing websites.
                            With expertise in user interface design and problem-solving,
                            I excel at utilizing HTML, CSS, and JavaScript to enhance user
                            experiences and address their needs.
                        </p>
                        <button>Hire me</button>
                    </div>



                </div>


                <div className={style.right}>
                    <div className={style.rightWrap}>
                        <img src={picture} alt="right-image" height={400} width={400} />
                    </div>
                </div>
            </div>
        </>
    )
}