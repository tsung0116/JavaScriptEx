function Employee (name, dept) {
  this.name = name || "";
  this.dept = dept || "general";
}

var jim = new Employee('Jones, Jim', 'marketing');
console.log('name = ' + jim.name + '; dept = ' + jim.dept +'.'); 

function WorkerBee(name, dept, projs) {
  this.base = Employee;
  this.base(name, dept);
  this.projects = projs || [];
}
//WorkerBee.prototype = Object.create(Employee.prototype);
WorkerBee.prototype = new Employee;

var mark = new WorkerBee('Smith, Mark', 'training', ['javascript']);
console.log('name = ' + mark.name + '; dept = ' + mark.dept + '; projects = ' + mark.projects + '.'); 

function Engineer (name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, "engineering", projs);
  this.machine = mach || "";
}
Engineer.prototype = new WorkerBee;

/*
function Engineer (name, projs, mach) {
  WorkerBee.call(this, name, "engineering", projs);
  this.machine = mach || "";
}
*/


var mary = new Engineer("Doe, Mary", ["navigator", "javascript"], "belau");

console.log('name = ' + mary.name + '; dept = ' + mary.dept + '; projects = ' + mary.projects + '; bonus = ' + mary.bonus + '; specialty = ' + mary.specialty + '.');