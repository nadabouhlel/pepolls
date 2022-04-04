import React from "react";
import "../MyInfo/MyIdentity.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import insta from "../../../Images/insta.png";
import link from "../../../Images/link.png";
import { Navigate } from "react-router-dom";
import "../AboutMe/AboutMe.css";
function AboutMe() {
  const formik = useFormik({
    initialValues: {
      shortbio: "",
      longbio: "",
      work: "",
      experience: "",
      job: "",
      level: "",
      field: "",
      country: "",
      status: "",
    },
    validationSchema: Yup.object({
      shortbio: Yup.string().max(20, "less than 20").required("required"),
      longbio: Yup.string().max(50, "less than 50").required("required"),
      work: Yup.string().max(10, "less than 10").required("required"),
      experience: Yup.string().max(15, "less than 10").required("required"),
      job: Yup.string().max(10, "less than 10").required("required"),
      level: Yup.string().required("required"),
      field: Yup.string().max(10, "less than 10").required("required"),
      country: Yup.string().max(10, "less than 10").required("required"),
      status: Yup.string().required("required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  //console.log(formik.touched)

  return (
    <>
      {/* biography */}
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="input-container-bio">
            <div className="text">
              <p className="myidentity">My biography</p>
              <p className="check">
                Please check these information before continuing
              </p>
            </div>
            <div className="container-jdid">
              <div className="label-bio-jdida">
                <label>Short Bio :</label>
                <label>Long Bio :</label>
              </div>
              <div className="input-bio">
                <input
                  id="shortbio"
                  name="shortbio"
                  type="text"
                  placeholder="Type your shortbio"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.shortbio}
                />
                {formik.touched.shortbio && formik.errors.shortbio ? (
                  <a>{formik.errors.shortbio}</a>
                ) : null}
                <input
                  className="longbio"
                  id="longbio"
                  name="longbio"
                  type="text"
                  placeholder="Type your longbio"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.longbio}
                />
                {formik.touched.longbio && formik.errors.longbio ? (
                  <a>{formik.errors.longbio}</a>
                ) : null}
              </div>
            </div>
          </div>

          {/* Professional */}

          <div className="input-container-pro">
            <div className="text">
              <p className="myidentity">Professional</p>
              <p className="check">
                Please check these information before continuing
              </p>
            </div>
            <div className="container-pro">
              <div className="label-pro">
                <label>Work Status :</label>
                <label>Experience :</label>
                <label>Current job :</label>
              </div>
              <div className="input-pro">
                <select
                  className="select"
                  name="work"
                  id="work"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.work}
                >
                  <option value="none" selected>
                    {" "}
                    Work Status
                  </option>
                  <option value="Employed">Employed</option>
                  <option value="UnEmployed">UnEmployed</option>
                  <option value="other">other</option>
                </select>
                {formik.touched.work && formik.errors.work ? (
                  <a>{formik.errors.work}</a>
                ) : null}
                <input
                  id="experience"
                  name="experience"
                  type="text"
                  placeholder="Type your experience"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.experience}
                />
                {formik.touched.experience && formik.errors.experience ? (
                  <a>{formik.errors.experience}</a>
                ) : null}
                <input
                  id="job"
                  name="job"
                  type="text"
                  placeholder="Type your Current job"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.job}
                />
                {formik.touched.job && formik.errors.job ? (
                  <a>{formik.errors.job}</a>
                ) : null}
              </div>
            </div>
          </div>
          {/* education */}

          <div className="input-container-pro">
            <div className="text">
              <p className="myidentity">Educational</p>
              <p className="check">
                Please check these information before continuing
              </p>
            </div>
            <div className="container-pro">
              <div abel-proclassName="l">
                <label>Level :</label>
                <label>Field :</label>
                <label>Country :</label>
              </div>
              <div className="input-pro">
                <select
                  className="select"
                  name="level"
                  id="level"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.level}
                >
                  <option value="none" selected>
                    {" "}
                    level
                  </option>
                  <option value="Graduate">Graduate</option>
                  <option value="UnGraduate">UnGraduate</option>
                  <option value="other">other</option>
                </select>
                {formik.touched.level && formik.errors.level ? (
                  <a>{formik.errors.level}</a>
                ) : null}
                <input
                  id="field"
                  name="field"
                  type="text"
                  placeholder="Type your field"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.field}
                />
                {formik.touched.field && formik.errors.field ? (
                  <a>{formik.errors.field}</a>
                ) : null}
                <input
                  id="country"
                  name="country"
                  type="text"
                  placeholder="jj/mm/aaaa"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                />
                {formik.touched.country && formik.errors.country ? (
                  <a>{formik.errors.country}</a>
                ) : null}
              </div>
            </div>
          </div>

          {/* social */}

          <div className="input-container-soc">
            <div className="text">
              <p className="myidentity">Social</p>
              <p className="check">
                Please check these information before continuing
              </p>
            </div>
            <div className="container-pro">
              <div className="label-pro">
                <label> Status :</label>
              </div>
              <div className="input-pro">
                <select
                  className="select-social"
                  name="status"
                  id="status"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.status}
                >
                  <option value="none" selected>
                    {" "}
                    status
                  </option>
                  <option value="Married">Married</option>
                  <option value="Engaged">Engaged</option>
                  <option value="other">other</option>
                </select>
                {formik.touched.status && formik.errors.status ? (
                  <a>{formik.errors.status}</a>
                ) : null}
              </div>
            </div>
          </div>
          {/* save changes button  */}

          <div className="button">
            <button className="change" type="submit">
              Savechanges
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AboutMe;
