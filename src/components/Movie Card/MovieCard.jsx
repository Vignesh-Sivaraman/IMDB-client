import "./MovieCard.scss";

const MovieCard = ({ movie }) => {
  return (
    <div className="movieCard">
      <h3>{movie.moviename}</h3>
      <hr />
      <img
        variant="top"
        src={movie.movieposter}
        style={{ width: "100%", height: "250px" }}
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
    </div>
  );
};

export default MovieCard;
