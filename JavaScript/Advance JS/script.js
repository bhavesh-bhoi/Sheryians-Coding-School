// Objects

let user = {
  name: "Bhavesh",
  age: 21,
  gender: "male",
};

console.log(user);

// Classes
// Classes returns new objects everytime

class SmartPhone {
  constructor() {
    this.Brand = "SamSung";
    this.Series = "S";
    this.Model = "S26";
    this.Price = 135000;
  }
}

let Phone1 = new SmartPhone();

// Class with Constructor
class SmartPhone1 {
  constructor(brand, series, model, price) {
    this.Brand = brand;
    this.Series = series;
    this.Model = model;
    this.Price = price;
  }
}

let Phone2 = new SmartPhone1("Samsung", "S", "S25", 115000);

// Book Class Example
// Value of this is decided when it is being called
class Book {
  constructor(bName, bAuthor, bPrice, bColor) {
    this.bookName = bName;
    this.bookAuthor = bAuthor;
    this.bookPrice = bPrice;
    this.color = bColor;
  }

  nextPage() {
    console.log("Page Changed To Next!");
  }
  pauseReadingBook() {
    console.log("Book Paused!");
  }
  previousPage() {
    console.log("Page Changed To Previous!");
  }
}

let book = new Book(
  "The Power Of Your SubConcious Mind",
  "Dr. Joseph Murphy",
  1.5 + "$",
  "OffWhite",
);
