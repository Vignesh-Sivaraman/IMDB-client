import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import MovieCard from "../../components/Movie Card/MovieCard";
import "./MovieListing.scss";
import { env } from "../../config/config";
import { useNavigate } from "react-router-dom";

const MovieListing = () => {
  let [movies, setMovies] = useState([]);
  let navigate = useNavigate();

  const getMovieData = async () => {
    try {
      let result = await axios.get(
        `${env.api}/movies/getallmovies`
        //     {
        //     headers: {
        //       Authorization: window.localStorage.getItem("app-token"),
        //     },
        //   }
      );
      if (result.status === 200) {
        console.log(result.data);
        setMovies(result.data);
      }
    } catch (err) {
      alert(`Error Code: ${err}`);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <Fragment>
      <button onClick={() => navigate("/addmovie")}>Add a New Movie</button>
      <div className="cards">
        {movies.map((movie, i) => {
          return <MovieCard key={i + 1} movie={movie} />;
        })}
      </div>
    </Fragment>
  );
};

export default MovieListing;
