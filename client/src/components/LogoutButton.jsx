import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const logOut = () => {
	const { logout } = useAuth0();

	return (
		<button
			onClick={() =>
				logout({ logoutParameters: { returnTo: window.location.origin } })
			}
		>
			Log out
		</button>
	);
};

export default logOut;
