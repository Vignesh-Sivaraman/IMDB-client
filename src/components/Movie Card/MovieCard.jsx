import { useNavigate } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div className="movieCard">
      <h3>{movie.moviename}</h3>
      <hr />
      <img
        variant="top"
        src={movie.movieposter}
        style={{ width: "100%", height: "350px" }}
        alt={movie.moviename}
      />
      <h5>
        <b>Year Of Realease: </b>
        {movie.movieyear}
      </h5>
      <p>
        <b>Producer: </b> {movie.producername}
      </p>
      <p>
        <b>Actors: </b>
        {movie.actors}
      </p>
      <p>
        <b>Plot: </b>
        {movie.movieplot}
      </p>
      <button
        onClick={() => navigate(`/updatemovie/${movie.idmovies}`)}
        className="btns"
        style={{ backgroundColor: "orange" }}
      >
        Update
      </button>
    </div>
  );
};

export default MovieCard;
