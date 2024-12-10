import Footer from "./components/Footer";
import Header from "./components/Header";
import BooksPage from "./pages/BooksPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="w-3/4 max-w-5xl mx-auto my-18 grow">
        <BooksPage />
      </main>

      <Footer />
    </div>
  );
}

export default App;
