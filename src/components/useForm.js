import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";

export function useForm(initialFieldValues) {
  const [values, setValues] = useState(initialFieldValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return {
    values,
    setValues,
    handleInputChange,
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
  return (
    <form className={classes.root} autoComplete="off">
      {props.children}
    </form>
  );
}
