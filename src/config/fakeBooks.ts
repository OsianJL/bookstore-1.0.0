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
    photo:
      "https://images.cdn2.buscalibre.com/fit-in/520x520/a6/ce/a6cee3390585e27d1258944ed98ad960.jpg",
    price: 19.94,
    type: "novel",
  },
  {
    id: 3,
    title: "Cien Años de Soledad",
    author: "Gabriel García Márquez",
    photo:
      "https://m.media-amazon.com/images/I/91TvVQS7loL._AC_UF894,1000_QL80_.jpg",
    price: 22.5,
    type: "magical",
  },
  {
    id: 4,
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    photo:
      "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/fotos/374/original/portada_don-quijote-de-la-mancha-comic_miguel-de-cervantes_202310231106.jpg",
    price: 25.99,
    type: "classic",
  },
  {
    id: 5,
    title: "1984",
    author: "George Orwell",
    photo:
      "https://m.media-amazon.com/images/I/71sOSrd+JxL._SY425_.jpg",
    price: 18.75,
    type: "dystopian",
  },
  {
    id: 6,
    title: "La Sombra del Viento",
    author: "Carlos Ruiz Zafón",
    photo:
      "https://m.media-amazon.com/images/I/41a5Yy8OUOL._SY445_SX342_.jpg",
    price: 24.5,
    type: "mystery",
  },
  {
    id: 7,
    title: "Los Juegos del Hambre",
    author: "Suzanne Collins",
    photo:
      "https://images-na.ssl-images-amazon.com/images/I/61JfGcL2ljL.jpg",
    price: 21.99,
    type: "novel",
  },
];

export default books;
