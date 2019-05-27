import React, { Component } from "react";
import { Formik } from "formik";
import { CreateCleaningObjectForm } from "./CreateCleaningObjectForm";

import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { Button } from "@material-ui/core";

const CreateCleaningObject = props => {
  const values = {
    name: "",
    email: "",
    country: "",
    postcode: "",
    street: "",
    region: "",
    number: "",
    country: "",
    place: "",
    firstName: "",
    lastName: "",
    phone: ""
  };
  const { t, i18n } = useTranslation();
  
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  const validationSchema = Yup.object({
    name: Yup.string("Enter a name").required(t("name")),
    email: Yup.string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required")
  });

  return (
    <>            
      <Button onClick={() => changeLanguage("en")}>English</Button>
      <Button onClick={() => changeLanguage("vi")}>Viet Nam</Button>
      <h1>Create Cleaning Object</h1>
      <Formik
        render={props => <CreateCleaningObjectForm {...props} />}
        initialValues={values}
        
        onSubmit={(values, { setSubmitting }) => {          
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={true}
      />
    </>
  );
};

export default CreateCleaningObject;
