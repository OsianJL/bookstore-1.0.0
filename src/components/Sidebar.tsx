import { AiOutlineClose as CloseMark } from "react-icons/ai";
import { motion } from "motion/react"

type Props = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

function Sidebar(props: Props) {
  function handleCloseBtn() {
    props.setIsOpenSidebar((prevIsOpenSidebar) => !prevIsOpenSidebar);
  }

  return (
    // <div className="fixed bg-green-300 top-10 h-screen w-full flex justify-center">
    <motion.div 
    className={`fixed bg-green-300 h-screen w-full flex justify-center`}
    initial={{opacity:0}}
    animate={{
      x:["100%", "0%"],
      opacity:100}}
    transition={{duration: 1}}
    exit={{
      x:["0%", "100%"],
      opacity:0
    }}
    >
      <nav className="font-roboto flex flex-col text-2xl justify-center gap-4 py-5">
        <button onClick={handleCloseBtn} className="absolute top-5 right-5">
          <CloseMark size={35} color="white" />
        </button>
        <a href="/">Home</a>
        <a href="/books">Books</a>
        <a href="/login">Log In</a>
      </nav>
    </motion.div>
  );
}

export default Sidebar;
