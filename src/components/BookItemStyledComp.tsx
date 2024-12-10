import { LuPencilLine, LuTrash2 } from "react-icons/lu";
import styled, { css } from "styled-components";

import colorsConfig from "../config/colors";
// import bookImage from "../assets/images/guitar-cat.jpg";
import { Book } from "../config/types";

const { colors } = colorsConfig;

interface Props {
  offer?: boolean
  book: Book; 
}

function BookItemStyledComp(props: Props) {

  const { book, offer} = props
  
  return (
    <ContainerDiv $offer={offer}>
      <img className="image" src={book.photo} alt="book cover" />
      <div className="infoCard">
        <h2 className="title">{book.title}</h2>
        <div className="info">
          <h3 className="subtitle">{book.author}</h3>
          <button className="button">{book.type}</button>
        </div>
        <footer className="footer">
          <span className="price">{book.price}</span>
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
    </ContainerDiv>
  );
}

interface StyledProps {
  $offer?: boolean; 
}


const ContainerDiv = styled.div<StyledProps>`
  position: relative;
  border: 5px solid;
  border-color: ${(props) => props.$offer ? 'lightseagreen' : colors.purple};
  box-shadow: 5px 5px 10px black;
  font-family: "Times New Roman", Times, serif;
  height: max-content;
  /* overflow: hidden; */

  ${props => props.$offer && css`
    
    &::before {
    content: '¡Oferta!';
    display: grid;
    place-items: center;
    padding: 0.2rem;

    font-size: 0.8rem;
    background-color: lightseagreen;
    width: max-content;
    aspect-ratio: 1;
    font-weight: bold;
    color: white; 
    border-radius: 50%;
    rotate: -45deg; 

    position: absolute;
    top: 0; 
    right: 0;
    translate: 50% -50%;
    /* translate: 15% -15% */
  }
  `}



  

  .image {
    width: 15rem;
    height: 18rem;
    object-fit: cover;
  }

  .infoCard {
    padding: 1rem;

    .title {
      font-weight: bold;
      margin-block: 0.5rem;
    }

    .info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;

      .subtitle {
        font-style: italic;
      }

      .button {
        background-color: ${colors.purple};
        color: white;
        padding-inline: 1rem;
        border-radius: 99999px;
      }
    }

    .footer {
      display: flex;
      justify-content: space-between;

      .price {
        font-size: 0.8rem;
      }

      .icons {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }
`;

export default BookItemStyledComp;
