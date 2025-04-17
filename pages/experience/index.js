import React from "react";
import { motion } from "framer-motion";
import ContainerBlock from "@/components/ContainerBlock";
import Experience from "@/components/Experience";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const index = () => {
  return (
    <>
      <ContainerBlock>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants}>
            <Experience />
          </motion.div>
        </motion.div>
      </ContainerBlock>
    </>
  );
};

export default index;
