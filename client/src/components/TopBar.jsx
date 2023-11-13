import logo from "../images/logoipsum.svg";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export default function TopBar() {

  return (
    <div className="TopBar">
      <Link to="/">
        <img src={logo} alt="Logo" id="logo" />
      </Link>

      {isAuthenticated && (
        <div>
          <LogoutButton />
        </div>
      )}
      {!isAuthenticated && <LoginButton />}
    </div>
  );
}