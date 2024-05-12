import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Engegment/Container";
import Containers from "./components/Pre-wedding/Container";
import Containerss from "./components/Wedding/Container";
// import Containerses from './component/Containers';
// import MobileMenu from './components/MobileMenu';
import Containerses from "./components/Container";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Containerses />} />
          <Route path="/engegment" element={<Container />} />
          <Route path="/pre-wedding" element={<Containers />} />
          <Route path="/wedding" element={<Containerss />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
