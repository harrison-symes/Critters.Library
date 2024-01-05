import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ShopPage from "./components/ShopPage";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" Component={ShopPage} />
          <Route path="/cards" Component={Cards} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
