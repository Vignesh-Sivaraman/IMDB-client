import axios from "axios";
import { FormikProvider, useFormik } from "formik";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { env } from "../../config/config";
import { setActors } from "../../store/actors/actors.action";
import { selectActors } from "../../store/actors/actors.selector";
import { setProducers } from "../../store/producers/producers.action";
import { selectProducers } from "../../store/producers/producers.selector";
import "./AddActor.scss";

const AddActor = () => {
  const genders = ["Male", "Female"];
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      actorname: "",
      actorgender: "",
      actordob: "",
      actorbio: "",
    },
    onSubmit: async (values) => {
      try {
        let result = await axios.post(
          `${env.api}/actors/addactor`,
          values
          //  {
          //   headers: {
          //     Authorization: window.localStorage.getItem("app-token"),
          //   },
          // }
        );
        if (result.status === 200) {
          alert("Actor added");
          navigate("/addmovie");
        }
      } catch (err) {
        alert(
          `Error Code: ${err.response.status}- ${err.response.data.message}`
        );
      }
    },
  });
  return (
    <div className="addactor-main">
      <div className="box">
        <div className="title">
          <h3>Add New Actor</h3>
        </div>
        <FormikProvider value={formik}>
          <form
            className="myForm"
            onSubmit={formik.handleSubmit}
            style={{ width: "100%" }}
          >
            <div className="form-box">
              {/*Actor Name:*/}
              <div className="form-content">
                <label>Actor Name:</label>
                <input
                  className="inputbox"
                  type="text"
                  value={formik.values.actorname}
                  onChange={formik.handleChange}
                  name="actorname"
                  required
                />
              </div>
              {/*Gender*/}
              <div className="form-content">
                <label>Gender:</label>

                {genders.map((gender, i) => {
                  return (
                    <Fragment key={i}>
                      <input
                        onChange={formik.handleChange}
                        type="radio"
                        value={gender}
                        name="actorgender"
                      />
                      <label>{gender}</label>
                    </Fragment>
                  );
                })}
              </div>
              {/*DOB*/}
              <div className="form-content">
                <label>DOB:</label>
                <input
                  className="inputbox"
                  type="date"
                  value={formik.values.actordob}
                  onChange={formik.handleChange}
                  name="actordob"
                  required
                />
              </div>
              {/*BIO*/}
              <div className="form-content">
                <label>BIO:</label>
                <input
                  className="inputbox"
                  type="text"
                  value={formik.values.actorbio}
                  onChange={formik.handleChange}
                  name="actorbio"
                  required
                />
              </div>
              {/*Submit button Names*/}
              <div className="form-content">
                <input type={"submit"} value="submit" className="btns" />
              </div>
            </div>
          </form>
        </FormikProvider>
        <button
          className="btns"
          style={{ marginLeft: "35px" }}
          onClick={() => navigate("/")}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default AddActor;
