import { Book } from "./types";

const books: Book[] = [
  {
    id: 1,
    title: "Harry Potter",
    author: "J.K. Rowling",
    photo:
      "https://img.remediosdigitales.com/000602/hp_y_la_piedra_filosofal_20_by_grafik-d8aomyb/450_1000.jpg",
    price: 29.01,
    type: "novel",
  },
  {
    id: 2,
    title: "El Perfume",
    author: "Patrick Süskind",
    photo: "https://images.cdn2.buscalibre.com/fit-in/520x520/a6/ce/a6cee3390585e27d1258944ed98ad960.jpg",
    price: 19.94,
    type: "novel",
  },
  {
    id: 3,
    title: "Cien Años de Soledad",
    author: "Gabriel García Márquez",
    photo: "https://example.com/photos/cien-anos-de-soledad.jpg",
    price: 22.5,
    type: "magical realism",
  },
  {
    id: 4,
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    photo: "https://example.com/photos/don-quijote.jpg",
    price: 25.99,
    type: "classic",
  },
];

export default books;
