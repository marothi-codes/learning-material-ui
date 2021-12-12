import { TextField } from "@material-ui/core";
import React from "react";

export default function Input({ name, label, type, value, onChange }) {
  return (
    <TextField
      label={label}
      name={name}
      type={type || "text"}
      value={value}
      onChange={onChange}
    />
  );
}
