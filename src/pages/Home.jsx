import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard.jsx";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Load movies from local db.json file
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.movies);
      })
      .catch((error) => {
        console.error("Error loading movies:", error);
      });
  }, []);

  return (
    <>
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        {movies.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </main>
    </>
  );
}

export default Home;
