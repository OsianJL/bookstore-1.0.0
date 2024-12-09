
import Logo2 from "./logos/Logo2"

export default function Menu() {
  return (
    <nav className="font-roboto flex justify-center gap-4 items-center">
      <a href="/">Home</a>
      <a href="/books">Books</a>
      <a href="/login">Log In</a>
      <Logo2/>
    </nav>
  )
}
