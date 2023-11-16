import book from "../images/book.png";
import dice from "../images/dice.png";
import face from "../images/face.png";
import home from "../images/home.png";
import person from "../images/person.png";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export default function NavBar() {
	const { user, isAuthenticated } = useAuth0();
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
				{isAuthenticated && (
					<img id="userPicture" src={user.picture} alt={user.name} />
				)}
				{!isAuthenticated && <img src={person} alt="Account" />}
			</Link>
		</div>
	);
}
