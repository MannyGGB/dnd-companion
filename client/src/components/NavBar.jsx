import book from "../images/book.png"
import dice from "../images/dice.png";
import face from "../images/face.png";
import home from "../images/home.png";
import person from "../images/person.png";

export default function NavBar() {
  return (
    <div className="NavBar">
      <img src={home} alt="Home" />
      <img src={face} alt="Character" />
      <img src={dice} alt="Dice" id="dice" />
      <img src={book} alt="Journal" />
      <img src={person} alt="Profile" />
    </div>
  );
}
