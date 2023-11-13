import logo from "../images/logoipsum.svg"
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

export default function TopBar() {
  const { user, isAuthenticated } = useAuth0();

	return (
		<div className="TopBar">
			<img src={logo} alt="Logo" id="logo" />

			{isAuthenticated && (
				<div>
					
					<LogoutButton />
				</div>
			)}
			{!isAuthenticated && <LoginButton />}
		</div>
	);
}
