import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@material-ui/core";
import React from "react";

export default function Select(props) {
  const { name, label, value, variant, onChange, options } = props;

  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        label={label}
        name={name}
        variant={variant || "outlined"}
        value={value}
        onChange={onChange}
      >
        <MenuItem value="">None</MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option.id}>
            {option.title}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}
