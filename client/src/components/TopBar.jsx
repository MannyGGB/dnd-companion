import logo from "../images/logoipsum.svg";
import { Link } from "react-router-dom";

export default function TopBar() {

  return (
    <div className="TopBar">
      <Link to="/">
        <img src={logo} alt="Logo" id="logo" />
      </Link>
    </div>
  );
}