import "../App.css";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import "../CSS/profile.css";

export default function Profile({ API_Url }) {
	const { user, isAuthenticated } = useAuth0();

	return (
		<main>
			{isAuthenticated && (
				<div className="profile">
					<img className="profilePicture" src={user.picture} alt={user.name} />
					<h2>{user.name}</h2>
					<p>{user.email}</p>
					<LogoutButton />
				</div>
			)}
			{!isAuthenticated && (
				<div className="profile">
					<p>
						Log in to your account to save and update your character AND your
						journal!
					</p>
					<LoginButton />
				</div>
			)}
		</main>
		// ProfilePage
	);
}
