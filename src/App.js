import "./App.css";
import About from "./Components/About";
import Accomplishments from "./Components/Accomplishments";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Intro from "./Components/Intro";
import Header from "./Components/Header";
// import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import CompetitiveSkills from "./Components/CompetitiveSkills";
import Contact from "./Components/Contact";
// import Contact from "./Components/Contact";

function App() {
  // let cardBackgroundColor = "#0f3047";
  let cardBackgroundColor = "#FEFFFE";
  let textColor = "#000";

  // 1A3A59
  return (
    <div style={{ backgroundColor: "#F1F0EE" }}>
      {/* <div style={{ backgroundColor: "#001F3F" }}> */}
      <Header cardBackground={cardBackgroundColor} textColor={textColor} />
      {/* <Shortcut cardBackground={cardBackgroundColor} textColor={textColor} /> */}
      {/* <Navbar/> */}
      <Intro cardBackground={cardBackgroundColor} textColor={textColor} />
      <About cardBackground={cardBackgroundColor} textColor={textColor} />
      <Accomplishments
        cardBackground={cardBackgroundColor}
        textColor={textColor}
      />
      <Education cardBackground={cardBackgroundColor} textColor={textColor} />
      <Experience cardBackground={cardBackgroundColor} textColor={textColor} />
      <Project cardBackground={cardBackgroundColor} textColor={textColor} />
      <CompetitiveSkills
        cardBackground={cardBackgroundColor}
        textColor={textColor}
      />
      <Contact cardBackground={cardBackgroundColor} textColor={textColor} />
      {/* <div style={{ paddingBottom: 200 }}></div> */}
    </div>
  );
}

export default App;
