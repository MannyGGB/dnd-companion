import CharacterForm from "../components/CharacterForm";

export default function Character({ API_Url }) {
	return (
		<form>
			<CharacterForm />
			<input type="submit" value="Submit" />
		</form>
	);
}
