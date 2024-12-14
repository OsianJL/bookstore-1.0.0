import { motion } from "motion/react";

function Animations() {
  const demoVariants = {
    fadein: {
      opacity: [0, 1],
      transition: { duration: 5 },
    },
    fadeout: {
      opacity: [1, 0],
      transition: { duration: 5 },
    },

    down: {
      y:[-50, 0],
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fakeBoolean = false;

  return (
    <>
      <h2>Animations</h2>

      <motion.img
        className="my-4"
        src="https://picsum.photos/id/239/100"
        width={100}
        //*version 1 animaciones
        animate={{
          y: 0,
          border: "4px solid black",
        }}
        initial={{
          y: -30,
          border: "0px solid black",
        }}
        transition={{ duration: 3 }}
      />

      <motion.img
        className="my-4"
        src="https://picsum.photos/id/237/100"
        width={100}
        //*version 2 animaciones
        animate={{
          x: [-50, 0],
        }}
        transition={{
          delay: 1,
          duration: 1,
        }}
      />

      <motion.img
        className="my-4"
        src="https://picsum.photos/id/249/100"
        width={100}
        //*version 3 animaciones
        variants={demoVariants}
        animate={`${fakeBoolean ? "fadein" : "fadeout"}`}
      />
<hr />

      <motion.div 
      className="flex gap-5"
      variants={demoVariants}
      animate="down"
      >
        <motion.div 
        className="bg-pink-400 p-4 rounded border-2 border-black "
        variants={demoVariants}
        >1</motion.div>
        <motion.div 
        className="bg-pink-400 p-4 rounded border-2 border-black "
        variants={demoVariants}
        >2</motion.div>
        <motion.div 
        className="bg-pink-400 p-4 rounded border-2 border-black "
        variants={demoVariants}
        >3</motion.div>
        <motion.div 
        className="bg-pink-400 p-4 rounded border-2 border-black "
        variants={demoVariants}
        >4</motion.div>
        <motion.div 
        className="bg-pink-400 p-4 rounded border-2 border-black "
        variants={demoVariants}
        >5</motion.div>
      </motion.div>
    </>
  );
}

export default Animations;
