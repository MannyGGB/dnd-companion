import "../CSS/home.css";
import DnD_comp_Manny from "../images/DnD_comp_Manny.png";
import DnD_comp_Max from "../images/DnD_comp_Max.png";
import DnD_comp_Nellie from "../images/DnD_comp_Nellie.png";
import DnD_comp_Stephen from "../images/DnD_comp_Stephen.png";

export default function Home({ API_Url }) {
	return (
		<main>
			<div className="home-info">
				<h3>All you need to get started and playing Dungeons and Dragons.</h3>
			</div>

			<div className="home-info">
				<h2>Getting Started:</h2>
				<ol>
					<li>Log in and create a Profile.</li>
					<li>Watch the video below to get an understanding of DnD.</li>
					<li>
						Head to the character creation page below to create your character,
						and to the journal page to keep a log of what matters to you in the
						game.
					</li>
					<li>
						Check out a list of spells{" "}
						<a href="http://dnd5e.wikidot.com/spells">here.</a>
					</li>
					<li>Get playing!</li>
				</ol>
			</div>

			<div className="home-video">
				<iframe
					width="320"
					height="200"
					src="https://www.youtube.com/embed/GM_3e8iVMmQ?si=qWsfJI9_FXQo96YR"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				></iframe>
			</div>

			<div className="about">
				<h3>The team</h3>
				<div className="members">
					<div className="team-member">
						<img className="team-image" src={DnD_comp_Manny} alt="Manny" />
						<a href="https://github.com/mannyggb">Manny</a>
					</div>
					<div className="team-member">
						<img className="team-image" src={DnD_comp_Max} alt="Max" />
						<a href="https://github.com/maxpollock">Max</a>
					</div>

					<div className="team-member">
						<img className="team-image" src={DnD_comp_Nellie} alt="Nellie" />
						<a href="https://github.com/nellie-allsop">Nellie</a>
					</div>
					<div className="team-member">
						<img className="team-image" src={DnD_comp_Stephen} alt="Stephen" />
						<a href="https://github.com/sage-code82">Stephen</a>
					</div>
				</div>
				<section>
					The team behind this app all studied on the Tech Educators full stack
					bootcamp from September to November 2023. With thanks to
					<a href="https://antanddesign.artstation.com/"> Anthony</a> for the
					brilliant hand drawn illustrations on this site. If you'd like to see
					more of our work then click on any of our names.
				</section>
			</div>
		</main>
	);
}
