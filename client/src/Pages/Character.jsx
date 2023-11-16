import "../App.css";
import LoginButton from "../components/LoginButton";
import CharacterForm from "../components/CharacterForm";
import { useAuth0 } from "@auth0/auth0-react";

export default function Character({ API_Url }) {
	const { user, isAuthenticated } = useAuth0();

	return (
		<main>
			{isAuthenticated && (
				<div>
					<p id="greeting">Hello {user.given_name}!</p>
					<CharacterForm />
				</div>
			)}
			{!isAuthenticated && (
				<div>
					<p>Log in to your account to save and update your character!</p>
					<LoginButton />
				</div>
			)}
		</main>
	);
}
