/*
First you define the Employee constructor function, specifying the name and dept properties. 
*/

function Employee() {
  this.name = "";
  this.dept = "general";
}

/*
Next, you define the Manager constructor function, calling the Employee constructor and specifying the reports property. 
*/

function Manager() {
  Employee.call(this);
  this.reports = [];
}

/*
Finally, you assign a new object derived from Employee.prototype as the prototype for the Manager constructor function. 
Then, when you create a new Manager, it inherits the name and dept properties from the Employee object.
*/

Manager.prototype = Object.create(Employee.prototype);

function WorkerBee() {
  Employee.call(this);
  this.projects = [];
}
WorkerBee.prototype = Object.create(Employee.prototype);

function SalesPerson() {
   WorkerBee.call(this);
   this.dept = "sales";
   this.quota = 100;
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);

function Engineer() {
   WorkerBee.call(this);
   this.dept = "engineering";
   this.machine = "";
}
Engineer.prototype = Object.create(WorkerBee.prototype);


var mark = new WorkerBee;

console.log('name = ' + mark.name + '; dept = ' + mark.dept + '; projects = ' + mark.projects + '.');

mark.name = "Doe, Mark";
mark.dept = "admin";
mark.projects = ["navigator"];

console.log('name = ' + mark.name + '; dept = ' + mark.dept + '; projects = ' + mark.projects + '.');

mark.bonus = 3000;

console.log('name = ' + mark.name + '; dept = ' + mark.dept + '; projects = ' + mark.projects + '; bonus = ' + mark.bonus + '.');

//add a new property to an object that is being used as the prototype for a constructor function, you add that property to all objects that inherit properties from the prototype. 
Employee.prototype.specialty = "none";

console.log('name = ' + mark.name + '; dept = ' + mark.dept + '; projects = ' + mark.projects + '; bonus = ' + mark.bonus + '; specialty = ' + mark.specialty + '.');

Engineer.prototype.specialty = "code";

var jane = new Engineer;

console.log('name = ' + jane.name + '; dept = ' + jane.dept + '; projects = ' + jane.projects + '; bonus = ' + jane.bonus + '; specialty = ' + jane.specialty + '.');

function Employee (name, dept) {
  this.name = name || "";
  this.dept = dept || "general";
}

function WorkerBee(name, dept, projs) {
  this.base = Employee;
  this.base(name, dept);  
  this.projects = projs || [];
}

function Engineer (name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, "engineering", projs);
  this.machine = mach || "";
}

var mary = new Engineer("Doe, Mary", ["navigator", "javascript"], "belau");

console.log('name = ' + mary.name + '; dept = ' + mary.dept + '; projects = ' + mary.projects + '; bonus = ' + mary.bonus + '; specialty = ' + mary.specialty + '.');