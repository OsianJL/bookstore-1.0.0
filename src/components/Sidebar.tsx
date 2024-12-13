import { AiOutlineClose as CloseMark } from "react-icons/ai";

type Props = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

function Sidebar(props: Props) {
  function handleCloseBtn() {
    props.setIsOpenSidebar((prevIsOpenSidebar) => !prevIsOpenSidebar);
  }

  return (
    // <div className="fixed bg-green-300 top-10 h-screen w-full flex justify-center">
    <div className="fixed bg-green-300 h-screen w-full flex justify-center">
      <nav className="font-roboto flex flex-col justify-center gap-4 py-5">
        <button onClick={handleCloseBtn} className="absolute top-5 right-5">
          <CloseMark size={25} color="white" />
        </button>
        <a href="/">Home</a>
        <a href="/books">Books</a>
        <a href="/login">Log In</a>
      </nav>
    </div>
  );
}

export default Sidebar;
