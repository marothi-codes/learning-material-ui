import {
  Checkbox as MuiCheckbox,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import React from "react";

export default function CheckBox({ name, label, value, onChange }) {
  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <FormGroup>
      <FormControlLabel
        label={label}
        control={
          <MuiCheckbox
            color="primary"
            name={name}
            checked={value}
            value={value}
            onChange={(e) =>
              onChange(convertToDefEventPara(name, e.target.checked))
            }
          />
        }
      />
    </FormGroup>
  );
}
