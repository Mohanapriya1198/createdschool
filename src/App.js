import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Createschool from "./pages/Createschool";
import Sidebar from "./components/school/Sidebar";
import School from "./components/school/School";

function App() {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Createschool />} />
          </Routes>
        </Sidebar>
      </Router>
      {/* <School /> */}
    </>
  );
}

export default App;
