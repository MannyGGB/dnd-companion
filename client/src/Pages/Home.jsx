import "../CSS/home.css";

export default function Home() {
  return (
    <main>
      <div className="home-info">
        <h3>
          Welcome to DnD Companion! Dungeons and Dragrons (otherwise known as
          DnD) is a...Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quasi rerum laboriosam atque pariatur et.
        </h3>
      </div>
      <div className="home-video"></div>
      <div className="home-info">
        <h2>Useful information</h2>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate
            illum quaerat id
          </li>
          <li>
            Debitis incidunt autem ea esse nobis facilis repudiandae voluptate!
          </li>
          <li>
            Consequuntur ipsa aliquam, aperiam natus voluptate nulla praesentium
          </li>
          <li>
            Blanditiis labore dolores velit, aperiam cumque, voluptatibus amet
            praesentium
          </li>
        </ul>
      </div>
      <div className="about">
        <div className="team-member">
          <img src="/" alt="Nellie" />
          <p>Nellie</p>
        </div>
        <div className="team-member">
          <img src="/" alt="Manny" />
          <p>Manny</p>
        </div>
        <div className="team-member">
          <img src="/" alt="Stephen" />
          <p>Stephen</p>
        </div>
        <div className="team-member">
          <img src="/" alt="Max" />
          <p>Max</p>
        </div>
      </div>
    </main>
  );
}
