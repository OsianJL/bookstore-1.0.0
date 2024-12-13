import books from "../config/fakeBooks";
import BookItem from "./BookItem";

function BookList() {
  return (
    <section className="p-10 gap-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {books.map(book => <BookItem key={book.id} book={book}/>)}
    </section>
  );
}

export default BookList;
