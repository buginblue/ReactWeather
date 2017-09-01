var names = ['Mark', 'Dave', 'Helen'];

names.forEach(function (name) {
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';

console.log(returnMe('Mark'));

var person = {
  name: 'Simon',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' say hi to ' + name)
    });
  }
};

person.greet();

function add (a, b) {
    return a + b;
}

console.log(add(1, 3));
console.log(add(8, 2));

var addStatement = (a, b) => {
  return a + b;
}
console.log(add(4, 7));

var addExpression = (a, b) => a + b;
console.log(add(5, 8));
