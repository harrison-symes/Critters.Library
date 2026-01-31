import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import NewDisplay from "./components/NewDisplay/NewDisplay";
import MarketSim from "./components/Market/MarketSim";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" Component={NewDisplay} />
          <Route path="/market" Component={MarketSim} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
