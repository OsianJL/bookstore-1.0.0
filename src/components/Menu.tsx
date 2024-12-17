import { Link } from 'react-router-dom'
// import { toast } from "react-toastify" 
// import Logo2 from "./logos/Logo2"
import Logo from '../assets/logos/osianjl-logo-black-no_bg.svg?react'

// type Props = {
//   isOpenSidebar: boolean; 
// }

export default function Menu() {
  // const user = {userName: 'Osian'}; 
  const user = null
  // const openSidebarClasses = isOpenSidebar ? 'flex-col' : 'hidden'

  return (
    <>
    <nav className={`font-roboto hidden md:flex justify-center gap-4 items-center`}>

      <Link to="/">Home</Link>
      {/* <button onClick={()=> toast.success('hola')}>click toast</button> */}
      {!user && <Link to="/login">Log In</Link>}
      {!user && <Link to="/register">Register</Link>}
      {user && <Link to="/profile">Profile</Link>}
      {user && <Link to="/books">Books</Link>}
      {user && <Link to="/addbook">Add-Book</Link>}
      {user && <Link to="/editbook">Edit-Book</Link>}
      {/* <Logo2/> */}
      {/* podemos usar la libreria vite-plugin-svgr para importar directamente svg como componentes */}
      <Logo className='w-10 h-10'/>  
    </nav>
    </>
  )
}
