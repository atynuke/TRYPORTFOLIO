import React from "react";
import style from "./Project.module.css";
import ProjectI from "../../assets/project1.jpg";


export default function Project() {
    return (
        <>
            <div className={style.container3}>
                <div className={style.ProjectDiv}>
                    <div id={style.jProjects}> PROJECTS</div>
                    <div id={style.ProjectSpan}>
                        <span> These are some of my best projects. I have built these with HTML,CSS, React
                            and vanilla CSS. Check them out.</span>
                    </div>

                    <div id={style.Project1}>
                        <img src={ProjectI} />
                    </div>

                    {/* <div id="Project2">
                    <img src={project2} alt="Project-image" height={400} width={400} />
                    </div>n

                    <div id="Project3">
                    <img src={project3} alt="Project-image" height={400} width={400} />
                    </div>

                    <div id="Project4">
                    <img src={project4} alt="Project-image" height={400} width={400} />
                    </div> */}
                </div>

            </div>
        </>
    )
}