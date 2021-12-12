import { Button as MuiButton, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: "none",
  },
}));

export default function Button({
  text,
  size,
  color,
  variant,
  onClick,
  ...others
}) {
  const classes = useStyles();
  return (
    <MuiButton
      classes={{ root: classes.root, label: classes.label }}
      variant={variant}
      size={size}
      color={color}
      onClick={onClick}
      {...others}
    >
      {text}
    </MuiButton>
  );
}
