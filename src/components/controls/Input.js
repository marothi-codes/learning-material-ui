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
}) {
  return (
    <TextField
      label={label}
      name={name}
      type={type || "text"}
      variant={variant || "outlined"}
      value={value}
      {...(error && { error: true, helperText: error })}
      onChange={onChange}
    />
  );
}
