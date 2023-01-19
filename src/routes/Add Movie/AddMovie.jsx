import axios from "axios";
import { FormikProvider, useFormik } from "formik";
import { env } from "../../config/config";
import "./AddMovie.scss";

const actorOptions = [
  {
    label: "Rajini",
    actorid: 1,
  },
  {
    label: "Vijay",
    actorid: 2,
  },
  {
    label: "Ajith",
    actorid: 3,
  },
];

const producerOptions = [
  {
    label: "AGS",
    producerid: 1,
  },
  {
    label: "SGS",
    producerid: 2,
  },
  {
    label: "AGA",
    producerid: 3,
  },
];

const AddMovie = () => {
  const formik = useFormik({
    initialValues: {
      moviename: "",
      movieyear: "",
      movieposter: "",
      movieplot: "",
      producerId: producerOptions[0].producerid.toString(),
      actors: [],
    },
    onSubmit: async (values) => {
      try {
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

        console.log(values);
      } catch (err) {
        alert(
          `Error Code: ${err.response.status}- ${err.response.data.message}`
        );
      }
    },
  });
  return (
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
                      <option key={i + 1} value={producer.producerid}>
                        {producer.label}
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
                      <option key={i + 1} value={+actor.actorid}>
                        {actor.label}
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
  );
};

export default AddMovie;
