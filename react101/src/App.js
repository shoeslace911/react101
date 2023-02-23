import logo from "./logo.svg";
import "./App.css";
import Heading, { Facts } from "./components/FunctionalComponent.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>WELCOME TO THE JUNGLE WUAWHWUAHWUWHAUW</h1>
        <Heading />
        <Facts />
      </header>
    </div>
  );
}

export default App;
