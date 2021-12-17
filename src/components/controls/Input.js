import { TextField } from "@material-ui/core";
import React from "react";

export default function Input({
  name,
  label,
  type,
  value,
  variant,
  error = null,
  onChange,
  ...others
}) {
  return (
    <TextField
      label={label}
      name={name}
      type={type || "text"}
      variant={variant || "outlined"}
      value={value}
      {...others}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
    />
  );
}
