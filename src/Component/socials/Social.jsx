import React from "react";
import style from "./Social.module.css";
import Social1 from "../../assets/Social1.png";
import Social2 from "../../assets/Social2.png";
import Social4 from "../../assets/Social4.png"


export default function Socials() {
  return (
    <>
      <div className={style.container4}>
        <div className={style.ContactMeDiv}>
        {/* <div className={style.skill}>MY SKILLS</div> <br /> <br /> */}


          {/* <p> If you are looking to hire a Web Developer, <br />
            <span> I’m currently available for work </span></p> */}
        </div>

        <div className={style.skillDiv}>
          <div id={style.Get}>Get In Touch</div>
          <div id={style.more}>for more Project: @atynuke on github</div>
          <img className= {style.SocialImage} src={Social1} alt="" />
          <img className= {style.SocialImage} src={Social2} alt="" />
          <img className= {style.SocialImage} src={Social4} alt="" />

        </div>
      </div>

    </>
  )
}


