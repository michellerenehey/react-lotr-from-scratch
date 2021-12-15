import React from 'react';

export default function FilmsList({ title, academy_award_nominations, box_office_total }) {
  return (
    <div>
      <h1>title: {title}</h1>
      <p>nominations: {academy_award_nominations}</p>
      <p>box office total: ${box_office_total}</p>
    </div>
  );
}
