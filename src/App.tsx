import GithubLink from "./components/sections/GithubLink";
import Header from "./components/sections/Header";
import AboutMe from "./components/sections/AboutMe";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";

function App() {
  return (
    <main>
      <GithubLink />
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}

export default App;
