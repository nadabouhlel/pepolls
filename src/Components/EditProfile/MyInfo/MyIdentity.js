import React from "react";
import "../../EditProfile/MyInfo/MyIdentity.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import insta from "../../../Images/insta.png";
import link from "../../../Images/link.png";
import { useNavigate } from "react-router-dom";
import plus from "../../../Images/plus.png";
import pollupload from "../../../Images/pollupload.svg";


function MyIdentity() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      SurName: "",
      Pseudo: "",
      date: "",
      gender: "",
      phone: "",
      email: "",
      country: "",
      state: "",
      code: "",
      insta: "",
      link: "",
      file: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(20, "less than 20").required("required"),
      SurName: Yup.string().max(10, "less than 10").required("required"),
      Pseudo: Yup.string().max(10, "less than 10").required("required"),
      date: Yup.string().max(10, "less than 10").required("required"),
      gender: Yup.string().max(10, "less than 10").required("required"),
      phone: Yup.string().max(15, "less than 10").required("required"),
      email: Yup.string().required("required"),
      country: Yup.string().max(10, "less than 10").required("required"),
      state: Yup.string().max(10, "less than 10").required("required"),
      code: Yup.string().max(10, "less than 10").required("required"),
      insta: Yup.string().required("required"),
      link: Yup.string().required("required"),
      file: Yup.string().required("required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      // navigate('/verify');
    },
  });
  //console.log(formik.touched)

  return (
    <>
      {/* photo upload */}
<div className="links-container">
        <div>
          <div>
            <input
              className="pic"
              id="file"
              name="file"
              type="file"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.file}
            />

            {formik.touched.file && formik.errors.file ? (
              <a>{formik.errors.file}</a>
            ) : null}
          </div>
        </div>
      </div>

      <div>
        <form onSubmit={formik.handleSubmit}>
          {/* my identity form */}

          <div className="input-container">
            <div className="text">
              <p className="myidentity">My identity</p>
              <p className="check">
                Please check these information before continuing
              </p>
            </div>
            <div className="container-jdid">
              <div className="label-jdida">
                <label>Name :</label>
                <label>Surname :</label>
                <label>Pseudo :</label>
                <label>Date of Birth :</label>
                <label>Gender :</label>
              </div>
              <div className="input-jdida">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Type your name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <a>{formik.errors.name}</a>
                ) : null}
                <input
                  id="SurName"
                  name="SurName"
                  type="text"
                  placeholder="Type your SurName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.SurName}
                />
                {formik.touched.SurName && formik.errors.SurName ? (
                  <a>{formik.errors.SurName}</a>
                ) : null}
                <input
                  id="Pseudo"
                  name="Pseudo"
                  type="text"
                  placeholder="Type your Pseudo"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Pseudo}
                />
                {formik.touched.Pseudo && formik.errors.Pseudo ? (
                  <a>{formik.errors.Pseudo}</a>
                ) : null}
                <input
                  className="select-date"
                  id="date"
                  name="date"
                  type="date"
                  placeholder="jj/mm/aaaa"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.date}
                />
                {formik.touched.date && formik.errors.date ? (
                  <a>{formik.errors.date}</a>
                ) : null}
                <select
                  className="select"
                  name="gender"
                  id="gender"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.gender}
                >
                  <option value="none" selected>
                    {" "}
                    Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">other</option>
                </select>
                {formik.touched.gender && formik.errors.gender ? (
                  <a>{formik.errors.gender}</a>
                ) : null}
              </div>
            </div>
          </div>
          {/* my contact info form */}

          <div className="input-container">
            <div className="text">
              <p className="myidentity">Contact info.</p>
              <p className="check">
                Please check these information before continuing
              </p>
            </div>
            <div className="container-jdid">
              <div className="label-jdida">
                <label>Phone :</label>
                <label>Email :</label>
                <label>Country :</label>
                <label>State :</label>
                <label>Zip code :</label>
              </div>
              <div className="input-jdida">
                <input
                  id="phone"
                  name="phone"
                  type="phone"
                  placeholder="Type your phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <a>{formik.errors.phone}</a>
                ) : null}
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Type your email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <a>{formik.errors.email}</a>
                ) : null}
                <input
                  id="country"
                  name="country"
                  type="text"
                  placeholder="Type your country"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                />
                {formik.touched.country && formik.errors.country ? (
                  <a>{formik.errors.country}</a>
                ) : null}
                <input
                  id="state"
                  name="state"
                  type="text"
                  placeholder="Type your state"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.state}
                />
                {formik.touched.state && formik.errors.state ? (
                  <a>{formik.errors.state}</a>
                ) : null}
                <input
                  id="code"
                  name="code"
                  type="text"
                  placeholder="Type your ZIP code"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.code}
                />
                {formik.touched.code && formik.errors.code ? (
                  <a>{formik.errors.code}</a>
                ) : null}
              </div>
            </div>
          </div>
          {/* my links form */}
          <div className="input-container-links">
            <div className="text">
              <p className="myidentity">Links</p>
              <p className="check">
                Please check these information before continuing
              </p>
            </div>
            <div className="container-jdid">
              <div className="input-jdida-links">
                <img src={insta} alt="logo pepolls" className="contact-icon" />
                <div className="input-link">
                  <input
                    id="insta"
                    name="insta"
                    type="url"
                    placeholder="Type your insta link"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.insta}
                  />
                  {formik.touched.insta && formik.errors.insta ? (
                    <a>{formik.errors.insta}</a>
                  ) : null}
                </div>
                <div>
                  <img src={link} alt="logo pepolls" className="contact-icon" />
                  <div className="input-link">
                    <input
                      id="link"
                      name="link"
                      type="url"
                      placeholder="Type your link"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.link}
                    />
                    {formik.touched.link && formik.errors.link ? (
                      <a>{formik.errors.link}</a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* save changes button  */}

          <div className="button">
            <button className="change" type="submit">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default MyIdentity;
