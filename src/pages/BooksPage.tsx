// import BookItem from "../components/BookItem";
import BookItemStyledComp from "../components/BookItemStyledComp";
import BookItemTailwind from "../components/BookItemTailwind";

import books from "../config/fakeBooks";

function BooksPage() {
  return (
    <section className="p-10 gap-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* <BookItem /> */}
      {/* <BookItemStyledComp offer/> */}
      <BookItemStyledComp book={books[0]}/>
      <BookItemStyledComp book={books[1]} offer/>
      <BookItemTailwind/>
      <BookItemTailwind/>
      <BookItemTailwind/>
      <BookItemTailwind/>
    </section>
  );
}

export default BooksPage;
