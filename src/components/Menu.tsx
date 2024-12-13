
// import Logo2 from "./logos/Logo2"
import Logo from '../assets/logos/osianjl-logo-black-no_bg.svg?react'

// type Props = {
//   isOpenSidebar: boolean; 
// }

export default function Menu() {

  // const openSidebarClasses = isOpenSidebar ? 'flex-col' : 'hidden'

  return (
    <>
    <nav className={`font-roboto hidden md:flex justify-center gap-4 items-center`}>
      <a href="/">Home</a>
      <a href="/books">Books</a>
      <a href="/login">Log In</a>
      {/* <Logo2/> */}
      {/* podemos usar la libreria vite-plugin-svgr para importar directamente svg como componentes */}
      <Logo className='w-10 h-10'/>  
    </nav>
    </>
  )
}
