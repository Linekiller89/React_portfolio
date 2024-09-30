import React from "react";
import ProjectSlider from "./ProjectSlider";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <motion.div
        className="intro"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3 }}
      >
        <h1> Hello, I'm Yongsoo son</h1>
        <p>A passionate web developer skilled in React and JavaScript.</p>
      </motion.div>
      <ProjectSlider />
    </div>
  );
};

export default Home;
