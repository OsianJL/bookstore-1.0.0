// import BookItem from "../components/BookItem";
// import BookItemStyledComp from "../components/BookItemStyledComp";
import BookItemTailwind from "../components/BookItemTailwind";

function BooksPage() {
  return (
    <section className="p-5 gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* <BookItem />
      <BookItemStyledComp/> */}
      <BookItemTailwind/>
      <BookItemTailwind/>
      <BookItemTailwind/>
      <BookItemTailwind/>
    </section>
  );
}

export default BooksPage;
