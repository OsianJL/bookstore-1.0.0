import Footer from "./components/Footer";
import Header from "./components/Header";
import BooksPage from "./pages/BooksPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <BooksPage />

      <Footer />
    </div>
  );
}

export default App;
