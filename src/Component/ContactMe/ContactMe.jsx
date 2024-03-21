import React from "react";
import style from "./ContactMe.module.css";
import Social1 from "../../assets/Social1.png";
// import Social1 from "../../assets/Social2.svg";
// import Social1 from "../../assets/Social3.svg";
// import Social1 from "../../assets/Social4.svg";



export default function ContactMe() {
  return (
    <>
      <div className={style.container4}>
        <div className={style.ContactMeDiv}>
          <h1> CONTACT ME </h1>
          <p> If you are looking to hire a Web Developer, <br />
            <span> I’m currently available for work </span></p>
        </div>

        <div className={style.C}>
          <img className={style.SocialImage} src={Social1} />
        </div> 
      </div>

    </>
  )
}


