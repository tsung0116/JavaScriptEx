function Employee() {
  this.name = "";
  this.dept = "general";
}

function Employee (name) {
  this.name = name || "";
  this.dept = "general";
}

function Employee (name, dept) {
  this.name = name || "";
  this.dept = dept || "general";
}

var tim = new Employee;
console.log('name = ' + tim.name + '; dept = ' + tim.dept + '.'); 

var timmy = new Employee('Hsu, Timmy');
console.log('name = ' + timmy.name + '; dept = ' + timmy.dept + '.'); 

var timothy =new Employee('Hsu, Timothy', 'training');
console.log('name = ' + timothy.name + '; dept = ' + timothy.dept + '.'); 