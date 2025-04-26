import {Link} from 'react-router-dom';


function MovieCard({ id, title }) {
  
  return (
    <article>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
    </article>
  );
};

export default MovieCard;