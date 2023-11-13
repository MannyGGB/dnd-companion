import { useAuth0 } from "@auth0/auth0-react";

function LogIn() {
	const { loginWithRedirect } = useAuth0();

	return <button onClick={() => loginWithRedirect()}>Log in</button>;
}

export default LogIn;