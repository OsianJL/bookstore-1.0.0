import BookItem from "../components/BookItem";
import BookItemStyledComp from "../components/BookItemStyledComp";
import BookItemTailwind from "../components/BookItemTailwind";

function BooksPage() {
  return (
    <div className="flex justify-center gap-5 p-5 grow">
      <BookItem />
      <BookItemStyledComp/>
      <BookItemTailwind/>
    </div>
  );
}

export default BooksPage;
