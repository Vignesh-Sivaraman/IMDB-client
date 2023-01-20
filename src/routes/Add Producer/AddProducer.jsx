import axios from "axios";
import { FormikProvider, useFormik } from "formik";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { env } from "../../config/config";
import "./AddProducer.scss";

const AddProducer = () => {
  const genders = ["Male", "Female"];
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      producername: "",
      producergender: "",
      producerdob: "",
      producerbio: "",
    },
    onSubmit: async (values) => {
      try {
        let result = await axios.post(
          `${env.api}/producers/addproducer`,
          values
          //  {
          //   headers: {
          //     Authorization: window.localStorage.getItem("app-token"),
          //   },
          // }
        );
        if (result.status === 200) {
          alert("Producer added");
          navigate("/addmovie");
        }
        console.log(values);
      } catch (err) {
        alert(`Error Code: ${err}`);
      }
    },
  });
  return (
    <div className="addproducer-main">
      <div className="box">
        <div className="title">
          <h3>Add New Producer</h3>
        </div>
        <FormikProvider value={formik}>
          <form
            className="myForm"
            onSubmit={formik.handleSubmit}
            style={{ width: "100%" }}
          >
            <div className="form-box">
              {/*producer Name:*/}
              <div className="form-content">
                <label>Producer Name:</label>
                <input
                  className="inputbox"
                  type="text"
                  value={formik.values.producername}
                  onChange={formik.handleChange}
                  name="producername"
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
                        name="producergender"
                        required
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
                  value={formik.values.producerdob}
                  onChange={formik.handleChange}
                  name="producerdob"
                  required
                />
              </div>
              {/*BIO*/}
              <div className="form-content">
                <label>BIO:</label>
                <input
                  className="inputbox"
                  type="text"
                  value={formik.values.producerbio}
                  onChange={formik.handleChange}
                  name="producerbio"
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

export default AddProducer;
