import React, { useState } from "react";
import { motion } from "framer-motion";
const Test = () => {
  const items = ["item1", "item2", "item3", "item4"];

  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 100,
      transition: { delay: i * 0.3 },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item, index) => (
          <motion.li variants={variants} key={item} custom={index}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
