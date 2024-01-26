class Employee {
  constructor(name, id, emailAddress) {
    this.name = name;
    this.id = id;
    this.emailAddress = emailAddress;
  }

  getEmployeeDetails() {
    return `Employee Name: ${this.name}, ID: ${this.id}, Email Address: ${this.emailAddress}`;
  }
}

const me = new Employee("Bart", "001", "barpahl@publicis.com");

console.log(me.getEmployeeDetails());

const employees = [
  new Employee("Kevin", "420", "kevbrownie@publicis.com"),
  new Employee("Megan", "842", "megshark@publicis.com"),
  new Employee("Joana", "911", "Joanurkic@digitas.com"),
];

for (const team of employees) {
  console.log(team.getEmployeeDetails());
}
