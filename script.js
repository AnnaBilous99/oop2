class User {
  constructor(firstName, lastName, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.borrowedBooks = [];
  }
  borrowBooks(book) {
    this.borrowedBooks.push(book);
  }
}
let user1 = new User("Eli", "Grinberg", "Jerusalem");
let user2 = new User("Misha", "Vais", "Tel Aviv");
let user3 = new User("May", "Cohen", "Haifa");

user1.borrowBooks('"alice in wonderland"');
user1.borrowBooks('"wonderful life"');
user2.borrowBooks('"How to talk to anyone about anything"');
user2.borrowBooks('"good vibes,good life"');
user3.borrowBooks('"Little black book"');
console.log(user1);
console.log(user2);
console.log(user3);

class BookReport {
  constructor(name) {
    this.name = name;
    this.allUsers = [];
  }
  addNewUser(user) {
    this.allUsers.push(user);
  }
  printReport() {
    this.allUsers.forEach((element) => {
      console.log(
        element.firstName +
          " " +
          element.lastName +
          " from " +
          element.city +
          " he/she takes this book: " +
          element.borrowedBooks
      );
    });
  }
}

let a = new BookReport("report");
a.addNewUser(user1);
a.addNewUser(user2);
a.addNewUser(user3);
console.log(a);
a.printReport();
