import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        const foundMovie = data.movies.find((m) => m.id === Number(id));
        setMovie(foundMovie);
      })
      .catch((error) => {
        console.error("Error loading movie:", error);
      });
  }, [id]);

  if (!movie) {
    return <p>Loading movie...</p>;
  }

  return (
    <>
      <header>
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>Time: {movie.time} minutes</p>
        <div>
          {movie.genres.map((genre, index) => (
            <span key={index} style={{ marginRight: "8px" }}>
              {genre}
            </span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;
