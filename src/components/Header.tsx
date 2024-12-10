import Logo from "./logos/Logo";
import Menu from "./Menu";

// import catImage from '../assets/images/guitar-cat.jpg'


export default function Header() {
  return (
    <header className=" bg-green-300 flex justify-around items-center">
      {/* <a href={catImage} download="cat-image">download cat foto</a> */}
      <Logo />
      <Menu/>
    </header>
  )
}
