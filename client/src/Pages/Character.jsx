import CharacterForm from "../components/CharacterForm";
import { useState } from "react";

export default function Character() {
  const [modal, selectModal] = useState(false);

  function handleModal(formComponent) {
    selectModal(!modal);
    setImgData(formComponent);
  }

  return (
    <div>
      <CharacterForm />
    </div>
  );
}

