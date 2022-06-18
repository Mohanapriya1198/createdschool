import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/school/Sidebar";
import School from "./components/school/School";
import Classform from "./components/school/Classform";

function App() {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<School />} />
            <Route path="/class" element={<Classform />} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;
