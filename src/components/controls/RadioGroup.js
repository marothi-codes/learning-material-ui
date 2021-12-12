import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from "@material-ui/core";
import React from "react";

export default function RadioGroup(props) {
  const { name, value, onChange, items } = props;

  return (
    <FormControl>
      <FormLabel>Gender</FormLabel>
      <MuiRadioGroup row name={name} value={value} onChange={onChange}>
        {items.map((controlLabel) => (
          <FormControlLabel
            label={controlLabel["title"]}
            value={controlLabel["id"]}
            key={controlLabel}
            control={<Radio />}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
}
