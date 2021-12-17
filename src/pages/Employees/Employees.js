import React, { useState } from "react";
import {
  InputAdornment,
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from "@material-ui/core";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import Search from "@material-ui/icons/Search";
import * as employeeService from "../../services/employeeService";

import PageHeader from "../../components/PageHeader";
import useTable from "../../components/useTable";
import { Controls } from "../../components/controls/controls";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
}));

const headerCells = [
  { id: "fullname", label: "Employee Name" },
  { id: "email", label: "Email" },
  { id: "mobile", label: "Mobile" },
  { id: "department", label: "Department" },
];

export default function Employees() {
  const classes = useStyles();
  const [records, setRecords] = useState(employeeService.getEmployees());
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const { TblContainer, TblHead, TblPagination, pagedAndSortedRecords } =
    useTable(records, headerCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter((x) =>
            x.fullname.toLowerCase().includes(target.value)
          );
      },
    });
  };

  return (
    <>
      <PageHeader
        title="New Employee"
        subtitle="Fill in the form below and submit it to add a new employee."
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        {/*<EmployeeForm />*/}

        <Toolbar>
          <Controls.Input
            label="Search Employees"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
        </Toolbar>

        <TblContainer>
          <TblHead />
          <TableBody>
            {pagedAndSortedRecords().map((item) => (
              <TableRow key={item}>
                <TableCell>{item.fullname}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </>
  );
}
