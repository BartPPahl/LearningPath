class Employee {
  constructor(name, id, emailAddress) {
    this.name = name;
    this.id = id;
    this.emailAddress = emailAddress;
  }

  getEmployeeDetails() {
    return `Employee Name: ${this.name}, ID: ${this.id}, Email Address: ${this.emailAddress}`;
  }


  getIngredients(){
    return `The ingredients for the soup are: `;
    };
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

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error ("Promise1  is rejected after some time")), 3000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise2 takes priority"), 200);
});

p1.then(console.log).catch(console.error);
p2.then(console.log).catch(console.error);
