import "../CSS/home.css";

export default function Home() {
  return (
    <main>
      <div className="home-info">
        <h3>Welcome to DnD Companion!</h3>
        <h3>
          All you need to get started and playing Dungeons and Dragrons.
        </h3>
      </div>
      
      <div className="home-info">
        <h2>Getting Started:</h2>
        <ol>
          <li>
            Log in and create a Profile.
          </li>
          <li>
            Watch the video below to get an understanding of DnD.
          </li>
          <li>
            Go to Character Creation page to create your character.
          </li>
          <li>
            Get playing!
          </li>
        </ol>
      </div>

      <div className="home-video">
      <iframe width="320" height="200" src="https://www.youtube.com/embed/GM_3e8iVMmQ?si=qWsfJI9_FXQo96YR" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>

      <div className="about">
        <h3>The team</h3>
        <div className="members">
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
      </div>
    </main>
  );
}
