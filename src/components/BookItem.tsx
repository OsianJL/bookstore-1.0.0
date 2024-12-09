import { LuPencilLine, LuTrash2} from "react-icons/lu";


import bookImage from '../assets/images/guitar-cat.jpg'
import styles from '../components/styles/bookItem.module.css'


function BookItem() {

const {title, info, card, infoCard, footer, icons, subtitle, button, price, image} = styles

  return (
    <div className={card}>
      <img className={image} src={bookImage} alt="book cover"/>
      <div className={infoCard}>
        <h2 className={title}>el titulo</h2>
        <div className={info}>
          <h3 className={subtitle}>subtitulo</h3>
          <button className={button}>Info</button>
        </div>
        <footer className={footer}>
          <span className={price} >price</span>
          <div className={icons}>
              <span><LuPencilLine /></span>
              <span><LuTrash2 color="red" /></span>
          </div>
        </footer>
      </div>
    </div>
  )
}




export default BookItem
