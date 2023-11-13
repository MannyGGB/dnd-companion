import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
	const { user, isAuthenticated } = useAuth0();

	return (
		<>
			{isAuthenticated && (
				<div>
					<img id="userPicture" src={user.picture} alt={user.name} />
					<h2>{user.name}</h2>
					<p>{user.email}</p>
					<LogoutButton />
				</div>
			)}
			{!isAuthenticated && <LoginButton />}
		</>
		// ProfilePage
	);
}
