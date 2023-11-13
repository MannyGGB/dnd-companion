import book from "../images/book.png";
import dice from "../images/dice.png";
import face from "../images/face.png";
import home from "../images/home.png";
import person from "../images/person.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">
      <Link to="/">
        <img src={home} alt="Home" />
      </Link>
      <Link to="/character">
        <img src={face} alt="Character" />
      </Link>
      <Link to="/dice">
        <img src={dice} alt="Dice" id="dice" />
      </Link>
      <Link to="/journal">
        <img src={book} alt="Journal" />
      </Link>
      <Link to="/profile">
        <img src={person} alt="Profile" />
      </Link>
    </div>
  );
}
