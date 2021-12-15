const KEYS = {
  employees: "employees",
  employeeId: "employeeId",
};

export const getDepartmentsCollection = () => [
  { id: "1", title: "Cyber Security" },
  { id: "2", title: "Finance" },
  { id: "3", title: "Graphic Design" },
  { id: "4", title: "Human Resources" },
  { id: "5", title: "Marketing" },
  { id: "6", title: "Networking" },
  { id: "7", title: "Photography" },
  { id: "8", title: "Software Development" },
  { id: "9", title: "Videography" },
];

export function generateEmployeeId() {
  if (localStorage.getItem(KEYS["employees"]) === null)
    localStorage.setItem(KEYS["employees"], "0");

  let id = parseInt(localStorage.getItem(KEYS["employeeId"]));
  localStorage.setItem(KEYS["employeeId"], (++id).toString());
  return id;
}

export function insertEmployee(data) {
  let employees = getEmployees();
  data["id"] = generateEmployeeId();
  employees.push(data);
  localStorage.setItem(KEYS["employees"], JSON.stringify(employees));
}

export function getEmployees() {
  if (localStorage.getItem(KEYS["employees"]) === null)
    localStorage.setItem(KEYS["employees"], JSON.stringify([]));
  return JSON.parse(localStorage.getItem(KEYS["employees"]));
}
