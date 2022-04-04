import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function SettingsForm() {

const formik =useFormik({
initialValues:{
 accountType:"",
 Polls:"",
 Voters:"",
 Debaters:"",
 Statistics:"",
 Share:"",
 Topics:"",
 Connections:"",
 About:"",
 Messages:"",
 Invitations:"",
},
validationSchema:Yup.object({
  accountType: Yup.string().required("required"),
  Polls: Yup.string().required("required"),
  Voters: Yup.string().required("required"),
  Debaters: Yup.string().required("required"),
  Statistics: Yup.string().required("required"),
  Share: Yup.string().required("required"),
  Topics: Yup.string().required("required"),
  Connections: Yup.string().required("required"),
  About: Yup.string().required("required"),
  Messages: Yup.string().required("required"),
  Invitations: Yup.string().required("required"),

}),
onSubmit: (values) => {
  console.log(values);
},
});




  return (
    <>
      {/* privacy*/}
      <form onSubmit={formik.handleSubmit}>
        <div className="privacy-settings-container">
          <div className="text">
            <p className="myidentity">Privacy</p>
            <p className="form-text">
              Manage the information you allow other Pepolls users to see.{" "}
            </p>
          </div>
          <div className="container-privacy">
            <div className="label-privacy">
              <label for="accountType"> Account type</label>
            </div>
            <div className="input-privacy">
              <select className="select" 
              name="accountType" 
              id="accountType"
              onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.accountType}>
                <option value="none" selected>
                  {" "}
                  Account type{" "}
                </option>
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
              {formik.touched.accountType && formik.errors.accountType ? (
                  <a>{formik.errors.accountType}</a>
                ) : null}
            </div>
          </div>
          <div className="text">
            <p className="form-text">
              When you have a private account, only the people you are connected
              with can see your profile on Pepolls. Your existing connections
              will not be affected.{" "}
            </p>
          </div>
        </div>
        {/* my audiance*/}
        <div className="myaudiance-settings-container">
          <div className="text">
            <p className="myidentity">My audience</p>
            <p className="form-text">
              Manage the information you allow other Pepolls users to see.{" "}
            </p>
          </div>
          <div className="container-audience">
            <div className="label-audience">
              {/* labels */}
              <label for="work"> Polls</label>
              <label for="work"> Voters</label>
              <label for="work"> Debaters</label>
              <label for="work"> Statistics</label>
              <label for="work"> Share</label>
              <label for="work"> Topics</label>
              <label for="work"> Connections</label>
              <label for="work"> About</label>
            </div>
            <div className="input-audience">
            <select className="select" name="Polls" id="Polls"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Polls}>
                <option value="none" selected>
                
                Polls
                </option>
                <option value="Public">Public</option>

                <option value="My connections">My connections</option>
                <option value="Only me">Only me</option>
              </select>
              {formik.touched.Polls && formik.errors.Polls ? (
                  <a>{formik.errors.Polls}</a>
                ) : null}
              <select className="select" name="Voters" id="Voters"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Voters}>
                <option value="none" selected>
                
                  Voters
                </option>
                <option value="Public">Public</option>

                <option value="My connections">My connections</option>
                <option value="Only me">Only me</option>
              </select>
              {formik.touched.Voters && formik.errors.Voters ? (
                  <a>{formik.errors.Voters}</a>
                ) : null}
              <select className="select" name="Debaters" id="Debaters"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Debaters}>
                <option value="none" selected>
                 
                  Debaters
                </option>
                <option value="Public">Public</option>

                <option value="My connections">My connections</option>
                <option value="Only me">Only me</option>
              </select>
              {formik.touched.Debaters && formik.errors.Debaters ? (
                  <a>{formik.errors.Debaters}</a>
                ) : null}
              <select  className="select" name="Statistics" id="Statistics"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Statistics}>
                <option value="none" selected>
                
                  Statistics
                </option>
                <option value="Public">Public</option>

                <option value="My connections">My connections</option>
                <option value="Only me">Only me</option>
              </select>
              {formik.touched.Statistics && formik.errors.Statistics ? (
                  <a>{formik.errors.Statistics}</a>
                ) : null}
              <select className="select" name="Share" id="Share"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Share}>
                <option value="none" selected>
               
                  Share
                </option>
                <option value="Public">Public</option>

                <option value="My connections">My connections</option>
                <option value="Only me">Only me</option>
              </select>
              {formik.touched.Share && formik.errors.Share ? (
                  <a>{formik.errors.Share}</a>
                ) : null}
              <select className="select" name="Topics" id="Topics"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Topics}>
                <option value="none" selected>
                  
                  Topics
                </option>
                <option value="Public">Public</option>

                <option value="My connections">My connections</option>
                <option value="Only me">Only me</option>
              </select>
              {formik.touched.Topics && formik.errors.Topics ? (
                  <a>{formik.errors.Topics}</a>
                ) : null}
              <select className="select" name="Connections" id="Connections"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Connections}>
                <option value="none" selected>
                 
                  Connections
                </option>
                <option value="Public">Public</option>

                <option value="My connections">My connections</option>
                <option value="Only me">Only me</option>
              </select>
              {formik.touched.Connections && formik.errors.Connections ? (
                  <a>{formik.errors.Connections}</a>
                ) : null}
              <select className="select" name="About" id="About"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.About}>
                <option value="none" selected>
                  
                  About
                </option>
                <option value="Public">Public</option>

                <option value="My connections">My connections</option>
                <option value="Only me">Only me</option>
              </select>
              {formik.touched.About && formik.errors.About ? (
                  <a>{formik.errors.About}</a>
                ) : null}
            </div>
          </div>
        </div>
        {/* contact*/}
        <div className="contact-settings-container">
          <div className="text">
            <p className="myidentity">Contact</p>
            <p className="form-text">
              Select the audience that can send you messages.{" "}
            </p>
          </div>
          <div className="container-contact">
            <div className="label-contact">
              <label for="work"> Messages</label>
              <label for="work"> Invitations</label>
            </div>
            <div className="input-contact">
              <select className="select" name="Messages" id=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Messages}>Messages
                <option value="none" selected>
                  
                  Messages
                </option>
                <option value="My connections">My connections</option>
                <option value="Everyone">Everyone</option>
              </select>
              {formik.touched.Messages && formik.errors.Messages ? (
                  <a>{formik.errors.Messages}</a>
                ) : null}
              <select className="select" name="Invitations" id="Invitations"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Invitations}>
                <option value="none" selected>
                  
                  Invitations
                </option>
                <option value="My connections">My connections</option>
                <option value="Everyone">Everyone</option>
              </select>
              {formik.touched.Invitations && formik.errors.Invitations ? (
                  <a>{formik.errors.Invitations}</a>
                ) : null}
            </div>
          </div>
        </div>
        {/* desactivation*/}
        <div className="desactivation-settings-container">
          <div className="text">
            <p className="myidentity">Desactivation</p>
            <p className="form-text">
              Find out how to deactivate your account.{" "}
            </p>
          </div>
          <button className="desactivation-account-button">
            Desactivate my account
          </button>
        </div>
        {/* save changes button  */}
        <div className="button">
          <button className="change" type="submit">
            Savechanges
          </button>
        </div>
      </form>
    </>
  );
}

export default SettingsForm;
