import './BooksList.css';

export default function BooksList({ title }) {
  return (
    <div className="bookCard">
      <h1>{title}</h1>
      <img
        src={`${process.env.PUBLIC_URL}/FILMS/${title.toLowerCase().replace(/\s/g, '-')}.jpeg`}
      />
    </div>
  );
}
