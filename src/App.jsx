import Header from "./Component/HEADER/Header"
import Hero from "./Component/HERO/Hero"
import AboutMe from "./Component/AboutMe/AboutME"
import Project from "./Component/Project/Project"
import GetIN from "./Component/GetInTouch/GetIN"
import Socials from "./Component/socials/Social.jsx"

import './App.css'


function App() {

  return (
    <>
      <div>
       <Header></Header>
      </div>

      <div>
        <Hero></Hero>
      </div>
      
      <div>
        <AboutMe></AboutMe>
      </div>

      <div>
        <Project></Project>
      </div>

      <div>
        <GetIN/>
      </div>

      <div>
        <Socials/>
      </div>
    </>
  )
}

export default App
