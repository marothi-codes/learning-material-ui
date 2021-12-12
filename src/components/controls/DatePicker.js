import React from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function DatePicker({
  name,
  label,
  value,
  inputVariant,
  onChange,
}) {
  const convertToDefEventPara = (name, value) => ({
    target: { name, value },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        label={label}
        format="dd-MM-yyyy"
        name={name}
        inputVariant={inputVariant || "outlined"}
        value={value}
        onChange={(date) => onChange(convertToDefEventPara(name, date))}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
  );
}
