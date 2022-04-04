import React from "react";
import "../NewPollComponents/NewPoll.css";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";
import pollupload from "../../../../../Images/pollupload.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

const label = { inputProps: { "aria-label": "Switch demo" } };

function AddPostCard() {
  const navigate = useNavigate();
  const settings = () => {
    navigate("/settings");
  };

  const formik = useFormik({
    initialValues: {
      question: "",
      image: "",
    },
    validationSchema: Yup.object({
      question: Yup.string().max(20, "less than 20").required("required"),
      file: Yup.string().required("required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      // navigate('/verify');
    },
  });

  return (
    <div className="add-poll-container">
      <p className="new-poll-title">dichotomous</p>

      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="switch-container">
            <div className="input-question-container">
              <input
                className="choice-container"
                id="question"
                name="question"
                type="text"
                placeholder="What's your question ?"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.question}
              />
              {formik.touched.question && formik.errors.question ? (
                <a>{formik.errors.question}</a>
              ) : null}
              <label for="image">
                <input
                  className="nada"
                  type="file"
                  name="image"
                  id="image"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.image}
                />
                {formik.touched.image && formik.errors.image ? (
                  <a>{formik.errors.image}</a>
                ) : null}
                <img type="file" src={pollupload} width="30px" />
              </label>
            </div>

            <div className="input-container-poll">
              <div className="choice-container">
                <p>Hide poll's statistics </p>
                <Switch {...label} />
              </div>
              <div className="choice-container">
                <p>Disactivate debate </p>
                <Switch {...label} />
              </div>
              <div className="choice-container">
                <p>Disactivate share </p>
                <Switch {...label} />
              </div>
            </div>
            <div>
              <button className="advanced-settings" type="submit">
                Advanced settings
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPostCard;
