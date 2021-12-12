import { Grid } from "@material-ui/core";
import React from "react";
import { Controls } from "../../components/controls/controls";
import Form, { useForm } from "../../components/useForm";
import * as employeeService from "../../services/employeeService";

const initialFieldValues = {
  id: 0,
  fullname: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  dateHired: new Date(),
  isPermanent: false,
};

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

export default function EmployeeForm() {
  const { handleInputChange, values } = useForm(initialFieldValues);

  return (
    <Form>
      <Grid container>
        <Grid item sm={6}>
          <Controls.Input
            label="Full Name"
            name="fullname"
            value={values["fullname"]}
            onChange={(e) => handleInputChange(e)}
          />
          <Controls.Input
            label="Email"
            name="email"
            type="email"
            value={values["email"]}
            onChange={(e) => handleInputChange(e)}
          />
          <Controls.Input
            label="Mobile"
            name="mobile"
            type="tel"
            value={values["mobile"]}
            onChange={(e) => handleInputChange(e)}
          />
          <Controls.Input
            label="City"
            name="city"
            value={values["city"]}
            onChange={(e) => handleInputChange(e)}
          />
        </Grid>
        <Grid item sm={6}>
          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values["gender"]}
            onChange={(e) => handleInputChange(e)}
            items={genderItems}
          />
          <Controls.Select
            name="departmentId"
            label="Department"
            value={values["departmentId"]}
            onChange={(e) => handleInputChange(e)}
            options={employeeService.getDepartmentsCollection()}
          />
          <Controls.DatePicker
            name="dateHired"
            value={values["dateHired"]}
            label="Date Hired"
            onChange={(e) => handleInputChange(e)}
          />
          <Controls.CheckBox
            name="isPermanent"
            value={values["isPermanent"]}
            label="Is Permanent"
            onChange={(e) => handleInputChange(e)}
          />
          <div>
            <Controls.Button
              variant="contained"
              color="primary"
              size="large"
              text="Submit"
              type="submit"
            />
            <Controls.Button
              variant="contained"
              color="secondary"
              size="large"
              text="Start Over"
              type="reset"
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
