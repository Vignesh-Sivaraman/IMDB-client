import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import MovieCard from "../../components/Movie Card/MovieCard";
import "./MovieListing.scss";
import { env } from "../../config/config";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../store/movies/movies.action";
import { selectMovies } from "../../store/movies/movies.selector";
import { setActors } from "../../store/actors/actors.action";
import { setProducers } from "../../store/producers/producers.action";

const MovieListing = () => {
  const dispatch = useDispatch();
  //   let [movies, setMovies] = useState([]);
  let navigate = useNavigate();
  const movies = useSelector(selectMovies);

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
        dispatch(setMovies(result.data));
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
      <div className="title">
        <h2>IMDB CLONE</h2>
      </div>
      <div className="home">
        <button className="btns" onClick={() => navigate("/addmovie")}>
          Add a New Movie
        </button>
      </div>
      <div className="cards">
        {movies &&
          movies.map((movie, i) => {
            return <MovieCard key={i + 1} movie={movie} />;
          })}
      </div>
    </Fragment>
  );
};

export default MovieListing;
