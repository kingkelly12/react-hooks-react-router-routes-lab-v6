import actors from "../../db.json";

function Actors() {
  return (
    <>
      <h1>Actors Page</h1>
      {actors.actors.map(actor => (
        <article key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

export default Actors;
