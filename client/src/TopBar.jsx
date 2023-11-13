import person from "./images/person.png";
import logo from "./images/logoipsum.svg"

export default function TopBar() {

  return (
    <div className="TopBar">
      <img src={logo} alt="Logo" id="logo" />
      <img src={person} alt="Profile" id="top-bar-profile"/>
    </div>
  )
}
