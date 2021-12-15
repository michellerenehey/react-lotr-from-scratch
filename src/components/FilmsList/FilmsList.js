import './FilmsList.css';

export default function FilmsList({ title, academy_award_nominations }) {
  return (
    <div className="filmCard">
      <h1 className="title">{title}</h1>
      <p className="awards">{academy_award_nominations} academy award nominations</p>
      <img
        src={`${process.env.PUBLIC_URL}/FILMS/${title.toLowerCase().replace(/\s/g, '-')}.jpeg`}
      />
    </div>
  );
}
