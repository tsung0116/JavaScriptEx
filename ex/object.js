function Employee () {
  this.name = "";
  this.dept = "general";
}

function Manager () {
  this.reports = [];
}
Manager.prototype = new Employee;

function WorkerBee () {
  this.projects = [];
}
WorkerBee.prototype = new Employee;

function SalesPerson () {
   this.dept = "sales";
   this.quota = 100;
}
SalesPerson.prototype = new WorkerBee;

function Engineer () {
   this.dept = "engineering";
   this.machine = "";
}
Engineer.prototype = new WorkerBee;

var mark = new WorkerBee;
var joe = new WorkerBee;

console.log(mark.name);
console.log(mark.dept);
console.log(mark.projects);

mark.name = "Doe, Mark";
mark.dept = "admin";
mark.projects = ["navigator"];

console.log(mark.name);
console.log(mark.dept);
console.log(mark.projects);

mark.bonus = 3000;

//Three methods to check whether an object has a property
console.log(joe.hasOwnProperty('bonus')); 
console.log('bonus' in joe);

if (joe.bonus) {
	console.log("Ha, Joe also got bonus!");
} else {
	console.log("That,s right, Joe got no bonus.");
}
