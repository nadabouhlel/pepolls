import React from "react";
import "../../EditProfile/MyInfo/MyIdentity.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import insta from "../../../Images/insta.png";
import link from "../../../Images/link.png";
import { useNavigate } from "react-router-dom";

function Topics() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
     
    },
    validationSchema: Yup.object({
     
    }),
    onSubmit: (values) => {
      console.log(values);
      navigate('/mainpage/Home/Network');
    },
  });
  //console.log(formik.touched)

  return (
    <>
 

      {/* my identity form */}
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="input-container">
            <div className="text">
              <p className="myidentity">What are you into?</p>
              <p className="check">
search input              </p>
            </div>

            <div className="input-field">
            
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

export default Topics;
