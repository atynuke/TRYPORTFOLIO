import Header from "./Component/HEADER/Header"
import Hero from "./Component/HERO/Hero"
import AboutMe from "./Component/AboutMe/AboutME"
import Project from "./Component/Project/Project"
// import ContactMe from "./Component/ContactMe/ContactMe"
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
        {/* <ContactMe></ContactMe> */}
      </div>
    </>
  )
}

export default App
