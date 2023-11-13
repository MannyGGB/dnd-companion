import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const logOut = () => {
	const { logout } = useAuth0();
	const { user } = useAuth0();

	return (
		<>
			<img
				id="userPicture"
				src={user.picture}
				alt={user.name}
				onClick={() =>
					logout({ logoutParameters: { returnTo: window.location.origin } })
				}
			/>
		</>
	);
};

export default logOut;
