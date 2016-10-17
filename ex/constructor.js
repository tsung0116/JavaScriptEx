/*
var test=function(){
    return 'test-from-funct';
}

var object={
    test:function(){
        return 'test';
    }
}
*/

//constructor
var People=function(){
    this.name='blackie',
    this.gender='Transgender'
}

var object={
    test:function(){
        console.log(this.name,arguments[0],arguments[1]);
    }
}

var man={name:'blackie'};
var woman={name:'karma'};

//Apply()
console.log("This Apply");
object.test.apply(man,['male','28']);

//Call()
console.log("This Call");
object.test.call(woman,'female','27');
console.log(woman.name + woman.gender);