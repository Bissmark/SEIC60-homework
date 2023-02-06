import Library from "./Library";
import RandomFact from "./RandomFact";
// updated import to reflect scss
import "./App.scss"

function App() {
  return (
    <div className="App">
      <RandomFact />
      <Library />
    </div>
  );
}

export default App;
