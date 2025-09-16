import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import NewDisplay from "./components/NewDisplay/NewDisplay";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" Component={NewDisplay} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
