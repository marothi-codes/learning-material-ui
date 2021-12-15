import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";

export function useForm(
  initialFieldValues,
  validateOnChange = false,
  validate
) {
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (validateOnChange) validate({ [name]: value });
  };

  const handleFormReset = () => {
    setValues(initialFieldValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    handleFormReset,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      margin: theme.spacing(1),
      width: "80%",
    },
  },
}));

export default function Form(props) {
  const classes = useStyles();
  const { children, ...others } = props;
  return (
    <form className={classes.root} autoComplete="off" noValidate {...others}>
      {props.children}
    </form>
  );
}
