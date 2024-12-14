import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
    initial={{
      opacity: 0
    }}
    animate={{
      opacity: 1
    }}>
      <img
        src="/osianjl-logo2-black.svg"
        alt="Osian Jorge Lezcano personal logo"
        width={"50px"}
      />
    </motion.div>
  );
}
