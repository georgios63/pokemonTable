import "./App.css";
import Pokemon from "./components/Pokemon";
import "bootstrap/dist/css/bootstrap.min.css";
import Buttons from "./components/Buttons";
import FetchingData from "./components/FetchingData";

function App() {
  return (
    <div className="App ">
      <Pokemon />
      <Buttons />
      <FetchingData />
    </div>
  );
}

export default App;
