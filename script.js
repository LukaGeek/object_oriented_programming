// კლასები JS-ში 2015 წელს შემოიტანეს
// ჩვენ ვიცით ორი ინფორმაციის შენახვის ტიპი: Object და Massive. კლასები გვჭირდება ახალი ტიპის ინფორმაციის შენახვის და მეთოდების შექმნაში.

// რა არის კლასი?!
// კლასის სახელი აუცილებლად დიდი ასოთი უნდა იწყებოდეს მსგავსად Object.freeze; Array.from
// constructor მხოლოდ კეთდება ერთხელ, წინააღმდეგ შემთხვევაში Error-ს გამოიტანს.
class Stundent {
  constructor(firstName, lastName) {
    this.firstName = firstName; // this ქმნის ცვლადს და დადეკლარირების დროს ის იცნობს ამ ცვლადს
    this.lastName = lastName;
    this.apsent = 0;
    this.mark = [];
  } // აქ მორჩა კლასის ძირითადი ჩონჩხი და ეხლა იწყება შინაარსობრივი მხარე
  // კლასების გენერირებისთვის ვიყენებთ ფუნქციებს

  fullName() {
    let first_name = this.firstName[0].toUpperCase() + this.firstName.slice(1);
    let last_name = this.lastName[0].toUpperCase() + this.lastName.slice(1);

    return `Your full name is ${first_name} ${last_name}`;
  }

  countApsent() {
    this.apsent++;

    let fullName = this.fullName().slice(18); // ჭრის "Your full name is" fullname()-ის ფუნქციაში

    if (this.apsent <= 1) {
      // მხოლობით რიცხვში თუკი apsent-ის value იქნება 1 ან მასზე ნაკლები, მაშინ გამოიტანს "time" და ყველა სხვა შემთხვევაში "times"
      return `${fullName} has been late for ${this.apsent} time`;
    } else {
      return `${fullName} has been late for ${this.apsent} times`;
    }
  }

  addMark(...mark) {
    this.mark.push(...mark);

    return this.mark;
  }

  static EnrollStudents() {
    // არ ჩანს Stundent-ის მახასიათებელში, მაგრამ არსებობს ეს მეთოდი და დგას მაგალითის მიღმა
    return "Enroll Students!";
  }
}

let student_1 = new Stundent("Luka", "Linchiki"); // აქ მას ვატანთ პარამეტრებს, რომელსაც დავადეკლარირებთ class-ის constructor-ში

/* // ეს არის თვისებები
console.log(student_1.firstName);
console.log(student_1.lastName);
 */

/* console.log(student_1.addMark(20, 30, 40));
console.log(student_1);
console.log(student_1.countApsent());
console.log(Stundent.EnrollStudents()); */

// ორწერტილს შორის მანძილის განსასაღვრი ფორმულა

/* 
A(x1; y1)
B(x2; y2)
AB = √(x2 - x1)² + (y2 - y1)²
*/

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    let dx = a.x - b.x;
    let dy = a.y - b.y;

    return Math.hypot(dx, dy); // აბრუნებს კვადრატების ჯამიდან ფესვს
  }
}

let point_1 = new Point(3, 7);
let point_2 = new Point(6, 11);

/* console.log(Point.distance(point_1, point_2)); */

// Reverse | შემოსული სტრინგის ან ბულიანის შებრუნება
// 567 => 765 | Hello => olleH

class Reverse {
  constructor(input) {
    this.input = input; // გავაკეთეთ ჩონჩხი სადაც შევიტანთ სტრინგს და ბულიანს
  }

  reverse() {
    let result = []; // მასივი, სადაც შევინახავთ ჩვენს მიერ დარევერსებულ სტრინგს ან ბულიანს
    let str = String(this.input); // სტრინგად ბულიანის გამო გადავაქციეთ

    for (let i = 0; i < str.length; i++) {
      result = str[i] + result; // ჯერ დააბრუნებს 8, შემდეგ 38, და შემდეგ კი 738
    }
    return result;
  }
}

console.log(new Reverse(837).reverse()); // გამოიტანს 738
console.log(new Reverse("hello").reverse()); // გამოიტანს olleh
