import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
	const { user, isAuthenticated } = useAuth0();

	return (
		<>
			{isAuthenticated && (
				<div>
					<img src={user.picture} alt={user.name} />
					<LogoutButton />
				</div>
			)}
			{!isAuthenticated && <LoginButton />}
		</>
	);
}

export default App;
