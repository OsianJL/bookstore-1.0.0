import { LuPencilLine, LuTrash2 } from "react-icons/lu";

import bookImage from "../assets/images/guitar-cat.jpg";

function BookItemTailwind() {
  return (
    <div className="">
      <img className="image" src={bookImage} alt="book cover" />
      <div className="infoCard">
        <h2 className="title">el titulo</h2>
        <div className="info">
          <h3 className="subtitle">subtitulo</h3>
          <button className="button">Info</button>
        </div>
        <footer className="footer">
          <span className="price">price</span>
          <div className="icons">
            <span>
              <LuPencilLine />
            </span>
            <span>
              <LuTrash2 color="red" />
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

// const ContainerDiv = styled.div`
//   border: 1px solid gray;
//   box-shadow: 5px 5px 10px black;
//   font-family: "Times New Roman", Times, serif;
//   height: max-content;

//   .image {
//     width: 15rem;
//     height: 18rem;
//     object-fit: cover;
//   }

//   .infoCard {
//     padding: 1rem;

//     .title {
//       font-weight: bold;
//       margin-block: 0.5rem;
//     }

//     .info {
//       display: flex;
//       justify-content: space-between;
//       margin-bottom: 1rem;

//       .subtitle {
//         font-style: italic;
//       }

//       .button {
//         background-color: grey;
//         color: white;
//         padding-inline: 1rem;
//         border-radius: 99999px;
//       }
//     }

//     .footer {
//       display: flex;
//       justify-content: space-between;

//       .price {
//         font-size: 0.8rem;
//       }

//       .icons {
//         display: flex;
//         align-items: center;
//         gap: 0.5rem;
//       }
//     }
//   }
// `;

export default BookItemTailwind;
