//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

 function Person(name, age) {
 	this.name = name;
 	this.age = age;
 }

//Now create three instances of Person with data you make up

  var katie = new Person('Katie', 27);
  var bobby = new Person('Bobby', 29);
  var deanna = new Person('Deanna', 22);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function() {
	alert(this.name);
}
