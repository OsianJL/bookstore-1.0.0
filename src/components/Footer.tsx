import { FaInstagramSquare, FaFacebook, FaTwitter } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-green-300 p-4 flex justify-center">
      <nav className="flex gap-3">
        <a
          href="https://www.instagram.com/tu_usuario/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare size={"2rem"} color="blue"/>
        </a>
        <a
          href="https://www.facebook.com/tu_usuario/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={"2rem"} color="blue" /> 
          {/* puedo pasar clases de tailwind tb */}
        </a>
        <a
          href="https://twitter.com/tu_usuario/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={"2rem"} color="blue" />
        </a>
      </nav>
        
    </footer>
  );
}
