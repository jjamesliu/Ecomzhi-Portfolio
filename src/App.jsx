import './App.css'
import NameHeading from "./components/NameHeading"
import Info from "./components/Info"
import About from "./components/About"
import Results from "./components/Results"

function App() {
  return (
    <div className="App">
      <NameHeading />
      <Info />
      <About />
      <Results />

      <p className="about_closing">
        If you’re a brand looking to scale on Amazon or explore wholesale opportunities, let’s connect and build something great together.
      </p>

      <a className="app_closing" href="https://jjamesliu.github.io/James-Portfolio-V2/" target="_blank">
      Check out my dev portfolio →
      </a>
    </div>
  )
}

export default App
