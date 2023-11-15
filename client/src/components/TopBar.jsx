import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function TopBar() {

  return (
    <div className="TopBar">
      <Link id="top-bar-link" to="/">
        <img src={logo} alt="Logo" id="logo" />
        <h4 id="app-title">Dnd Companion</h4>
      </Link>
    </div>
  );
}