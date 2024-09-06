// Explain

const data = {
  users: [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 }
 	],
	getUserNames: function() {
      return this.users.map(user => user.name);
  }
};
  
console.log(data.getUserNames()); // ['John', 'Jane']