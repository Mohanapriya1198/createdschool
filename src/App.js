import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/school/Sidebar";
import School from "./components/school/School";
import Classform from "./components/school/Classform";
import Studentform from "./components/school/Studentform";
import Teacherform from "./components/school/Teacherform";

function App() {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<School />} />
            <Route path="/class" element={<Classform />} />
            <Route path="/student" element={<Studentform />} />
            <Route path="/teacher" element={<Teacherform />} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;
