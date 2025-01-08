import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./components/Body.jsx";

import Info from "./pages/Info.jsx";
import NavBar from "./components/NavBar.jsx";
import Input from "./components/Input.jsx";

function App() {
  return (
    <div className="">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/details/:id" element={<Info />} />
          <Route path="/input/:value/:stype" element={<Input />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
