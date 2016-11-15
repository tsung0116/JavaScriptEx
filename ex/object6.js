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

var jane = new Engineer("Doe, Jane", ["navigator", "javascript"], "belau");
Employee.prototype.specialty = "none";

console.log('name = ' + jane.name + '; dept = ' + jane.dept + '; projects = ' + jane.projects + '; specialty = ' + jane.specialty + '.'); 