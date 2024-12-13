import { ToastContainer } from 'react-toastify';

import Footer from "./components/Footer";
import Header from "./components/Header";
import BooksPage from "./pages/BooksPage";

import 'react-toastify/dist/ReactToastify.css';


function App() {


 

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="w-3/4 max-w-5xl mx-auto my-18 grow">
        <BooksPage />
      </main>

      <Footer />

      <ToastContainer position='bottom-right' autoClose={1000}  />

      
    </div>
  );
}

export default App;
