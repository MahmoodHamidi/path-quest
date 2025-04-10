import React from "react";
import { motion } from "framer-motion";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { fadeIn } from "../../framerMotion/variants";
import VideoBg from "../videobg/VideoBg";
import "./HeroPage.css";
import SwitchLanguage from "../language/SwitchLanguage";
import { useGlobalContext,languages } from "../../contexts/GlobalContext";

const HeroPage = () => {
  const { state } = useGlobalContext();

  return (
    <div className="hero-container">
      <VideoBg />

      <div className="hero-content">
        <motion.div
          className="hero-text"
          variants={fadeIn("up", 0)}
          initial="hidden"
          animate="show"
        >
          <motion.h2
            className="hero-title"
            variants={fadeIn("left", 0)}
            initial="hidden"
            animate="show"
          >
            {languages[state.language].translations.welcome}
          </motion.h2>

          <motion.p
            className="hero-description"
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
          >
            {languages[state.language].translations.welcomeMessage}
          </motion.p>

          <motion.div
            variants={fadeIn("right", 1)}
            initial="hidden"
            animate="show"
          >
            <DropdownMenu />
            <SwitchLanguage/>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroPage;
