import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function logOut() {
	const { logout, user } = useAuth0();

	function customLogout() {
		const text = confirm("Are you sure want to log out?");
		if (text) {
			logout({ logoutParameters: { returnTo: window.location.origin } });
		}
	}

	return (
		<>
			{/* <img
				id="userPicture"
				src={user.picture}
				alt={user.name}
				onClick={customLogout}
			/> */}
		</>
	);
}

export default logOut;