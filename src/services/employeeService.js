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

export function insertEmployee(data) {
  let employees = getEmployees();
  data.id = generateEmployeeId();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function updateEmployee(data) {
  let employees = getEmployees();
  let recordIndex = employees.findIndex((x) => x.id === data.id);
  employees[recordIndex] = { ...data };
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function deleteEmployee(id) {
  let employees = getEmployees();
  employees = employees.filter((x) => x.id !== id);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function generateEmployeeId() {
  if (localStorage.getItem(KEYS.employeeId) === null)
    localStorage.setItem(KEYS.employeeId, "0");
  const employees = getEmployees();
  var id = employees.length.toString();
  localStorage.setItem(KEYS.employeeId, id);
  return id;
}

export function getEmployees() {
  if (localStorage.getItem(KEYS.employees) == null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  let employees = JSON.parse(localStorage.getItem(KEYS.employees));
  //map departmentID to department title
  let departments = getDepartmentsCollection();
  return employees.map((x) => ({
    ...x,
    department: departments[x.departmentId - 1].title,
  }));
}
