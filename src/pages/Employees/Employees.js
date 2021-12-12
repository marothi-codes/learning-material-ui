import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";

import PageHeader from "../../components/PageHeader";
import EmployeeForm from "./EmployeeForm";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function Employees() {
  const classes = useStyles();
  return (
    <>
      <PageHeader
        title="New Employee"
        subtitle="Fill in the form below and submit it to add a new employee."
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  );
}
