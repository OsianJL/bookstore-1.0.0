import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Books from "./pages/Books";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoutes from "./components/PrivateRoutes";
import Profile from "./pages/Profile";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import PublicRoutes from "./components/PublicRoutes";
// import Animations from './pages/Animations';

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-slate-200">
        <Header />

        <main className="w-3/4 max-w-5xl mx-auto my-18 grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<PublicRoutes />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            <Route element={<PrivateRoutes />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/books" element={<Books />} />
              <Route path="/addbook" element={<AddBook />} />
              <Route path="/editbook" element={<EditBook />} />
            </Route>
          </Routes>
        </main>

        {/* <Animations/> */}

        <Footer />
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />

    </>
  );
}

export default App;
