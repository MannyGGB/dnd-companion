import book from "../images/book.png";
import dice from "../images/dice.png";
import face from "../images/face.png";
import home from "../images/home.png";
import person from "../images/person.png";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavBar() {
	const { user, isAuthenticated } = useAuth0();

	return (
		<div className="NavBar">
			<img src={home} alt="Home" />
			<img src={face} alt="Character" />
			<img src={dice} alt="Dice" id="dice" />
			<img src={book} alt="Journal" />

			{isAuthenticated && (
				<img id="userPicture" src={user.picture} alt={user.name} />
			)}
			{!isAuthenticated && <img src={person} alt="Account" />}
		</div>
	);
}
