import './CharactersList.css';

export default function CharactersList({ name }) {
  return (
    <div>
      <h1 className="characterName">{name}</h1>
    </div>
  );
}
