import './App.css'
import NameHeading from "./components/NameHeading"
import Info from "./components/Info"
import About from "./components/About"

function App() {
  return (
    <div className="App">
      <NameHeading />
      <Info />
      <About />
      <a className="app_closing" href="https://jjamesliu.github.io/james-portfolio/" target="_blank">
      Check out my dev portfolio →
      </a>
    </div>
  )
}

export default App
