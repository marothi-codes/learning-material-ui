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
  const { errors, handleInputChange, setErrors, values } =
    useForm(initialFieldValues);

  const validate = () => {
    let temp = {};
    const emailSyntax =
      /^[_\w\\-]+(\.[_\w\\-]+)*@[\w\\-]+(\.[\w\\-]+)*(\.[\D]{2,6})$/;
    temp.fullname = values.fullname
      ? ""
      : "Please type in the employee's name.";

    temp.email = values.email
      ? ""
      : "Please type in the employee's email address.";

    if (!/.{8}/.test(values["email"])) {
      temp.email = "The email address must consist of at least 8 characters.";
    } else if (emailSyntax.test(values["email"]) === false) {
      temp.email = "The email address is invalid.";
    }

    temp.mobile = /.{10}/.test(values.mobile)
      ? ""
      : "The phone number must consist of at least 10 characters.";
    temp.city = values.city ? "" : "Please type in the city's name.";
    if ("departmentId" in values)
      temp.departmentId =
        values.departmentId.length !== 0
          ? ""
          : "Please select the empoyee's respective department.";

    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      window.alert("Testing.");
    }
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Grid container>
        <Grid item sm={6}>
          <Controls.Input
            label="Full Name"
            name="fullname"
            value={values["fullname"]}
            error={errors["fullname"]}
            onChange={(e) => handleInputChange(e)}
          />
          <Controls.Input
            label="Email"
            name="email"
            type="email"
            value={values["email"]}
            error={errors["email"]}
            onChange={(e) => handleInputChange(e)}
          />
          <Controls.Input
            label="Mobile"
            name="mobile"
            type="tel"
            value={values["mobile"]}
            error={errors["mobile"]}
            onChange={(e) => handleInputChange(e)}
          />
          <Controls.Input
            label="City"
            name="city"
            value={values["city"]}
            error={errors["city"]}
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
            error={errors["departmentId"]}
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
