import "./App.css";
import HomePage from "./components/home-page/HomePage";
import NavBar from "./components/nav-bar/NavBar";
import PlacesToVisit from "./components/places-to-visit/PlaceVisit";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <PlacesToVisit />
    </div>
  );
}

export default App;
