import axios from "axios";
import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { env } from "../../config/config";
import { setActors } from "../../store/actors/actors.action";
import { selectActors } from "../../store/actors/actors.selector";
import { setProducers } from "../../store/producers/producers.action";
import { selectProducers } from "../../store/producers/producers.selector";
import "./AddMovie.scss";

const AddMovie = () => {
  const dispatch = useDispatch();

  const getActorData = async () => {
    try {
      let result = await axios.get(
        `${env.api}/actors/getallactors`
        //     {
        //     headers: {
        //       Authorization: window.localStorage.getItem("app-token"),
        //     },
        //   }
      );
      if (result.status === 200) {
        console.log(result.data);
        dispatch(setActors(result.data));
      }
    } catch (err) {
      alert(`Error Code: ${err}`);
    }
  };

  const getProducerData = async () => {
    try {
      let result = await axios.get(
        `${env.api}/producers/getallproducers`
        //     {
        //     headers: {
        //       Authorization: window.localStorage.getItem("app-token"),
        //     },
        //   }
      );
      if (result.status === 200) {
        console.log(result.data);
        dispatch(setProducers(result.data));
      }
    } catch (err) {
      alert(`Error Code: ${err}`);
    }
  };

  useEffect(() => {
    getProducerData();
    getActorData();
  }, []);

  const actorOptions = useSelector(selectActors);
  const producerOptions = useSelector(selectProducers);

  const formik = useFormik({
    initialValues: {
      moviename: "",
      movieyear: "",
      movieposter: "",
      movieplot: "",
      producerId: "",
      actors: [],
    },
    onSubmit: async (values) => {
      try {
        if (values.producerId === "")
          values.producerId = producerOptions[0].idproducers.toString();
        let result = await axios.post(
          `${env.api}/movies/addmovie`,
          values
          //  {
          //   headers: {
          //     Authorization: window.localStorage.getItem("app-token"),
          //   },
          // }
        );
        if (result.status === 200) {
        }
      } catch (err) {
        alert(
          `Error Code: ${err.response.status}- ${err.response.data.message}`
        );
      }
    },
  });
  return (
    actorOptions &&
    producerOptions && (
      <div className="addmovie-main">
        <div className="box">
          <div className="title">
            <h3>Add New Movie</h3>
          </div>
          <FormikProvider value={formik}>
            <form
              className="myForm"
              onSubmit={formik.handleSubmit}
              style={{ width: "100%" }}
            >
              <div className="form-box">
                {/*Movie Name:*/}
                <div className="form-content">
                  <label>Movie Name:</label>
                  <input
                    className="inputbox"
                    type="text"
                    value={formik.values.moviename}
                    onChange={formik.handleChange}
                    name="moviename"
                    required
                  />
                </div>
                {/*Release Year*/}
                <div className="form-content">
                  <label>Release Year:</label>
                  <input
                    className="inputbox"
                    type="number"
                    value={formik.values.movieyear}
                    onChange={formik.handleChange}
                    name="movieyear"
                    required
                  />
                </div>
                {/*Movie Poster*/}
                <div className="form-content">
                  <label>Movie Poster:</label>
                  <input
                    className="inputbox"
                    type="text"
                    value={formik.values.movieposter}
                    onChange={formik.handleChange}
                    name="movieposter"
                    required
                  />
                </div>
                {/*Movie Plot*/}
                <div className="form-content">
                  <label>Movie Plot:</label>
                  <input
                    className="inputbox"
                    type="text"
                    value={formik.values.movieplot}
                    onChange={formik.handleChange}
                    name="movieplot"
                    required
                  />
                </div>
                {/*Producer Name*/}
                <div className="form-content">
                  <label>Producer:</label>
                  <select
                    className="inputbox"
                    value={formik.values.producerId}
                    onChange={formik.handleChange}
                    name="producerId"
                    required
                  >
                    {producerOptions.map((producer, i) => {
                      return (
                        <option key={i + 1} value={producer.idproducers}>
                          {producer.producername}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/*Actors Names*/}
                <div className="form-content">
                  <label>Actors:</label>
                  <select
                    className="inputbox"
                    value={formik.values.actors}
                    onChange={formik.handleChange}
                    name="actors"
                    required
                    multiple
                  >
                    {actorOptions.map((actor, i) => {
                      return (
                        <option key={i + 1} value={+actor.idactors}>
                          {actor.actorname}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/*Submit button Names*/}
                <div className="form-content">
                  <input
                    type={"submit"}
                    value="submit"
                    className=""
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  />
                </div>
              </div>
            </form>
          </FormikProvider>
        </div>
      </div>
    )
  );
};

export default AddMovie;
