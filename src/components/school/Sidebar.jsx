import { motion } from "framer-motion";

const Sidebar = ({ children }) => {
  return (
    <div className="main-container">
      <motion.div animate={{ width: "200px" }} className="sidebar">
        <div className="top-section">
          <h1 className="logo">School</h1>
          {/* <div className="bars"><FaBars /></div> */}
        </div>
        <main>{children}</main>
      </motion.div>
    </div>
  );
};

export default Sidebar;
