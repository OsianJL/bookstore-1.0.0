import { motion } from "motion/react";

export default function Logo() {
  return (
    <div>
      <motion.img
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 5 }}
        drag="x"
        dragConstraints={{
          bottom: 10,
          left:10,
          right: 10,
          top: 10
        }}
        src="/osianjl-logo2-black.svg"
        alt="Osian Jorge Lezcano personal logo"
        width={"50px"}
      />
    </div>
  );
}
