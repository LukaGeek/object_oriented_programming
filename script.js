// კლასები JS-ში 2015 წელს შემოიტანეს
// ჩვენ ვიცით ორი ინფორმაციის შენახვის ტიპი: Object და Massive. კლასები გვჭირდება ახალი ტიპის ინფორმაციის შენახვის და მეთოდების შექმნაში.

// რა არის კლასი?!
// კლასის სახელი აუცილებლად დიდი ასოთი უნდა იწყებოდეს მსგავსად Object.freeze; Array.from
// constructor მხოლოდ კეთდება ერთხელ, წინააღმდეგ შემთხვევაში Error-ს გამოიტანს.
/* class Stundent {
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

let student_1 = new Stundent("Luka", "Linchiki"); // აქ მას ვატანთ პარამეტრებს, რომელსაც დავადეკლარირებთ class-ის constructor-ში */

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

/* class Point {
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

// console.log(Point.distance(point_1, point_2));

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
      result = str[i] + result; // ჯერ დააბრუნებს 8, შემდეგ 38, და შემდეგ კი 738.
    }
    return result;
  }
}

console.log(new Reverse(837).reverse()); // გამოიტანს 738
console.log(new Reverse("hello").reverse()); // გამოიტანს olleh */

// კლასები ტუტორიალებიდან
// class არის ES6-ის ფუნქცია რომელიც უზრუნველყოფს სტრუქტურულ და მარტივ გზას, რომ იმუშაო Object თან ტრადიციული constructor ის ფუნქციებით, მაგალითად: static, encapsulation, inheritance
// კლასის შესაქმნელად ვწერთ class (Object) ფრჩხილებში მოცემული არის ნებისმიერი, მაგრამ უნდა იწყებოდეს დიდი ასოთი(Uppercase-ით)

/* class Product {
  // constructor-ის გამოსაყენებლად ჩვეულებრივ ვწერთ constructor() {}

  constructor(name, price) {
    // this არის კლასის მეთოდი, რომელიც გვეხმარება შექმნას და გამოსაყენებლად ცვლადებს
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product name: ${this.name}, Price: $${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
}

const salesTax = 0.05;

const product1 = new Product("Laptop", 19.99);
const product2 = new Product("Mobile", 55.5);

const total = product2.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`); */

/* ------------------------------------------------------------------------------------ */

/* მონაცემთა სტრუქტურა */

// linked list
// single linked list -- ცალად ბმული სია

// ცალად ბმულ სიაში შეგვიძლია შევიტანოთ ნებისმიერი ტიპის ინფორმაცია. მასივის მსგავსად ისიც დალაგებულია, ანუ თუ გვინდა მივწვდეთ მეექვსე ელემენტს, ჩვენ აუცილებლად უნდა გავიაროთ მეხუთე ელემენტი.
// კვანძი (node)
// 1 ----> 2 ----> 3 ----> 4 ----> 5
// პირველი კვანძის(node) მისამართია 1, მეორეს მისამართია 2 და ა.შ.
// ჩვენ მხოლოდ შეგვიძლია ერთადერთი მიმართულებით: 1 --> 2 --> 3 --> 4 --> 5 მაგრამ არავითარ შემთხვევაში ჩვენ 5 --> 4 --> 3 --> 2 --> 1 ვერ დავბრუნდებით უკან.
// თითოეული მათგანი მიუთითებს შემდეგ ელემენტზე

// კვანძის შექმნა

/* class Node {
  constructor(val, next = null) {
    this.val = val; // კონტეინერში შენახულ ინფორმაციაზე მიმთითებელი
    this.next = next; // კონტეინერზე მიმთითებელი
  }
}

let first = new Node("n");
first.next = new Node("o"); // უნდა იყოს ახალ კვანძ(node)-ზე მიმთითებელი
first.next.next = new Node("d");
first.next.next.next = new Node("e"); */

// უნდა მიიღოს შემოსული მნიშვნელობა (რასაც ლისტში დავამატებთ)
// უნდა შეიქმნას ახალი კვანძი(node) ამ მნიშვნელობის შესანახად
// თუ ლისტი ცარიელია, მაშინ ეს მნიშვნელობა იქნება head და tail
// თუ ლისტში უკვე არის ელემენტები, მაშინ tail-ის next-ს მიენიჭება ახალილ კვანძი(node), შემდეგ ამ კვანძზე მიუთითებს tail

/* class SingleLinkedList {
  constructor(head = null, tail = null) {
    this.head = head; // თუ ლისტი ცარიელია, მაშინ ეს მნიშვნელობა იქნება head
    this.tail = tail;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }
}

let s_list = new SingleLinkedList();
s_list.push("e");
console.log(s_list); */

/* ისტორიული დოკუმენტების ბრაუზერი. */

// 1. ვქმნით Node(კვანძი)-ს

class Node {
  constructor(version, next = null) {
    this.version = version;
    this.next = next;
  }
}

class DocumentHistory {
  constructor(head = null) {
    this.head = head;
    this.length = 0;
  }

  // 2. ვამატებთ ახალ ვერსიას push-ით

  push(version) {
    const newNode = new Node(version);
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  // 3. ვბრუნდებით უკანა ვერსიაზე pop-ით

  pop() {
    if (!this.head) {
      // გავაკეთოთ Error Handling უფრო დახვეწილი throw new Error-ით
      throw new Error("ისტორია ცარიელია.");
    }

    const removedVersion = this.head.version;
    this.head = this.head.next;
    this.length--;

    return removedVersion;
  }

  // 4. ვაჩვენებთ მიმდინარე ვერსიას

  getCurrrentVersion() {
    if (!this.head) {
      throw new Error("ისტორია ცარიელია.");
    }

    return this.head.version;
  }

  // 5. ვაჩვენებთ ყველა ვერსიას

  getAllVersions() {
    let currentVersion = this.head;

    if (!currentVersion) {
      throw new Error("ისტორია ცარიელია.");
    }
    while (currentVersion) {
      console.log(currentVersion.version);
      currentVersion = currentVersion.next;
    }
  }

  // 6. ვერსიის სიგრძის ჩვენება

  getVersionLength() {
    return this.length;
  }
}

// 7. და ბოლოს გამოყენება

const history = new DocumentHistory();

history.push("ვერსია 1");
history.push("ვერსია 2");
history.push("ვერსია 3");

console.log("მიმდინარე ვერსია:", history.getCurrrentVersion());

history.getAllVersions();
console.log("სიგრძე:", history.getVersionLength());
console.log("წინა ვერსია:", history.pop());
