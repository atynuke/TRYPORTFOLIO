import React from "react";
import style from "./Project.module.css";
import ProjectI from "../../assets/project1.png";
import ProjectII from "../../assets/project2.png";
import ProjectIII from "../../assets/project3.png";
import ProjectIV from "../../assets/project4.png";
import ProjectV from "../../assets/project5.png";
import ProjectVI from "../../assets/project6.png";



export default function Project() {
    return (
        <>
            <div className={style.container3}>
                <div className={style.ProjectDiv}>
                    <div id={style.Projects}> PROJECTS</div>
                    <div id={style.ProjectSpan}>
                        <span> These are some of my best projects. I have built these with HTML,CSS, React
                            and vanilla CSS. Check them out.</span>
                    </div>


                    <div className={style.ProjectContent}>

                        <div id={style.ProjectImageDiv} >
                            <img className={style.ProjectImage} src={ProjectI} />
                            <h1>Made a Result summary template using HTML, CSS.</h1> <br />
                            <button>VIEW CODE</button>  
                        </div>
                        <div id={style.ProjectImageDiv}>
                            <img className={style.ProjectImage} src={ProjectII} />
                            <h1>Made a interactive component template using HTML, CSS.</h1>
                            <button>VIEW CODE</button>  
                        </div>

                        <div id={style.ProjectImageDiv}>
                            <img className={style.ProjectImage} src={ProjectIII} />
                            <h1>Made a Simple Omettele recipe template using HTML, CSS.</h1>
                            <button>VIEW CODE</button>  
                        </div>
                          
                        <div id={style.ProjectImageDiv}>
                            <img className={style.ProjectImage} src={ProjectIV} />
                            <h1>Made a simple and homemade Canape using HTML, CSS.</h1>
                            <button>VIEW CODE</button>  
                        </div>
                        <div id={style.ProjectImageDiv}>
                            <img className={style.ProjectImage} src={ProjectV} />
                            <h1>Made a interactive template using HTML, CSS.</h1>
                            <button>VIEW CODE</button>  
                        </div>
                        <div id={style.ProjectImageDiv}>
                            <img className={style.ProjectImage} src={ProjectVI} />
                            <h1>Made a Simple Calculator template using HTML, CSS.</h1>
                            <button>VIEW CODE</button>  
                        </div>

                    </div>



                </div>

            </div>
        </>
    )
}