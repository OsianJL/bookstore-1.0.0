import { LuPencilLine as EditIcon, LuTrash2 as DeleteIcon } from "react-icons/lu";

import handleEditBook from "../helpers/functions/handleEditBook";
import handleDeleteBook from "../helpers/functions/handleDeleteBook";

import { Book } from "../config/types";
interface Props {
  book: Book; 
}



function BookItem(props: Props) {

const {book} = props

  return (
    <article className="border-1 border-black font-roboto shadow-custom">
      <img
        className="aspect-[16/24] object-cover"
        src={book.photo}
        alt={`${book.title} book cover`}
      />
      <section className="p-4">
        <h1 className="text-sm font-bold text-gray-800">{book.title}</h1>

        <div className="flex justify-between items-center mt-2">
          <h2 className="text-xs text-gray-600 italic">{book.author}</h2>

          <span className="inline-block bg-purple-300 text-gray-800 text-xs px-3 py-1 rounded-full">
            {book.type}
          </span>
        </div>

        <section className="flex justify-between items-center mt-3">
          <h3 className="text-blue-600 font-bold text-base">{book.price}</h3>
          <div className="flex gap-2 me-2">
            <button onClick={() => handleEditBook(book.id)}>
              <EditIcon />
            </button>
            <button onClick={() => handleDeleteBook(book.id)}>
              <DeleteIcon color="red" />
            </button>
          </div>
        </section>
      </section>
    </article>
  );
}

export default BookItem;
