import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu as BurgerMenu } from "react-icons/gi";
import { useState } from "react";

import Logo from "./logos/Logo";
import Menu from "./Menu";
import Sidebar from "./Sidebar";

// import catImage from '../assets/images/guitar-cat.jpg'

export default function Header() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <>
      <header
        className={`bg-green-300 px-5 flex justify-between  lg:px-0 md:justify-around items-center`}
      >
        {/* <a href={catImage} download="cat-image">download cat foto</a> */}
        <Logo />
        <Menu />
        <button
          onClick={() => {
            setIsOpenSidebar(!isOpenSidebar);
          }}
          className="md:hidden lg:hidden"
        >
          {isOpenSidebar ? (
            <AiOutlineClose size={25} color="white" />
          ) : (
            <BurgerMenu size={25} color="white" />
          )}
        </button>
      </header>
      {isOpenSidebar && <Sidebar setIsOpenSidebar={setIsOpenSidebar} />}
    </>
  );
}
