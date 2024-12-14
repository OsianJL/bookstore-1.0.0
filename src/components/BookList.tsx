import { motion } from 'motion/react'

import books from "../config/fakeBooks";
import BookItem from "./BookItem";

function BookList() {

const booksVariant = {
  staggerFadein: {
    opacity: [0, 1],
    x:[50, 0],
    transition: {
      duration: 2,
      // delay: .5,
      staggerChildren: 0.4,
    }
  }

}



  return (
    <motion.section 
    className="p-10 gap-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    variants={booksVariant}
    animate='staggerFadein'
    >
      {books.map(book => <BookItem variants={booksVariant} key={book.id} book={book}/>)}
    </motion.section>
  );
}

export default BookList;
