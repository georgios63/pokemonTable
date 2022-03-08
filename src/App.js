import "./App.css";
import Pokemon from "./components/Pokemon";
import "bootstrap/dist/css/bootstrap.min.css";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className="App ">
      <Pokemon />
      <Buttons />
    </div>
  );
}

export default App;
