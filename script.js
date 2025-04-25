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

/* class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class SingleLinkedList {
  constructor(head = null, tail = null, length = 0) {
    this.head = head;
    this.tail = tail;
    this.length = length;
  }

  push(val) {
    // ვამატებთ ელემენტს წინ
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    // ვშლით ბოლო ელემენტს
    if (!this.head) return "No elements to pop!";
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    return current;
  }

  shift() {
    // ვშლით პირველ ელემენტს
    if (!this.head) return "no elements to shift!";
    if (this.length === 0) {
      this.tail = null;
    }

    let currentHead = this.head;
    this.head = currentHead.next;

    return currentHead.val;
  }

  unshift(val) {
    // ვამატებთ ელემენტს წინ
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(index) {
    // ვნომრავთ ჩვენი ხელით
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter != index) {
      current = current.next;

      counter++;
    }

    return current;
  }

  set(val, index) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(val, index) {
    if (index < 0 || index > this.length) return null;
    if (index === this.length) return !!this.push(val);
    if (index === 0) this.unshift(val);

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;

    this.length++;

    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let removedNode = prevNode.next;
    prevNode.next = removedNode.next;

    this.length--;

    return this.removedNode;
  }
}

let s_list = new SingleLinkedList();
s_list.push("b");
s_list.push("a");
s_list.push("i");
s_list.insert("Hello!", 1);
console.log(s_list); */

/* ისტორიული დოკუმენტების ბრაუზერი. */

// 1. ვქმნით Node(კვანძი)-ს

/* class Node {
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
 */

// დავალება 2. დაწერეთ პროგრამა, რომელიც წაიკითხავს ტექსტს (მაგალითად, წინადადებას ან პარაგრაფს) და დაითვლის თითოეული სიტყვის გამოჩენის სიხშირეს. გამოიყენეთ ცალმხრივად ბმული სია (Singly Linked List) სიტყვებისა და მათი სიხშირეების შესანახად.

// 1. ვქმნით კვანძს, რომელიც შედგება: word, frequency, next

/* class Node {
  constructor(word) {
    this.word = word;
    this.frequency = 1;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // 2. ვწერთ ფუნქციად რომელიც ამატებს სიტყვას სიაში
  // თუ სიტყვა უკვე არსებობს სიაში, გაზარდეთ მისი frequency 1-ით
  // თუ სიტყვა არ არსებობს, დაამატეთ ის სიის ბოლოში frequency 1-ით.

  addWord(word) {
    if (!this.head) {
      this.head = new Node(word);

      return;
    }

    let current = this.head;
    while (current) {
      if (current.word === word) {
        current.frequency++;

        return;
      }

      if (!current.next) break;
      current = current.next;
    }

    current.next = new Node(word);
  }

  // 3. ვწერთ ფუნქცია printWordFrequencies-ს, რომელიც დაბეჭდავს ყველა სიტყვას და მათ სიხშირეს.

  printWordFrequencies() {
    let current = this.head;

    while (current) {
      console.log(`${current.word}: ${current.frequency}`);
      current = current.next;
    }
  }
} */

/* const text = "ცისფერი ცა ცისფერი ზღვა ლურჯი ცა";
const words = text.toLowerCase().match(/\p{L}+/gu);

if (words) {
  const list = new LinkedList();
  words.forEach((word) => list.addWord(word));

  console.log("სიტყვის სიხშირე:");
  list.printWordFrequencies();
} */

/* ორად ბმული სია | Double linked list */
// ორად ბმულ სიაში არ შეგვიძლია მივმართოთ ინდექსით, არ არის hashed(ჰეშირებული)

// მუსიკალური პლეილისტი ორად ბმული სიის გამოყენებით.

// 1. ვქმნით Node'ს

/* class Node {
  constructor(song, prev = null, next = null) {
    this.song = song;
    this.prev = prev;
    this.next = next;
  }
}

// 2. ვქმნით Playlist-ის კლასს
class Playlist {
  constructor(head = null, tail = null, current = null) {
    this.head = head;
    this.tail = tail;
    this.current = current;
  }

  // 3. მუსიკის დამატება

  addSong(song) {
    const newNode = new Node(song);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.current = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  // 4. მუსიკის ამოშლა

  removeSong(song) {
    let temp = this.head;

    while (temp) {
      if (temp.song === song) {
        if (temp.prev) {
          temp.prev.next = temp.next;
        }
        if (temp.next) {
          temp.next.prev = temp.prev;
        }
        if (temp === this.head) {
          this.head = temp.next;
        }
        if (temp === this.tail) {
          this.tail = temp.prev;
        }
        if (temp === this.current) {
          this.current = temp.next || temp.prev;
        }

        return;
      }

      temp = temp.next;
    }
  }

  // 5. შემდეგი მუსიკის არჩევა

  nextSong() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
    }
  }

  // 6. წინა მუსიკის არჩევა

  previousSong() {
    if (this.current && this.current.prev) {
      this.current = this.current.prev;
    }
  }

  // 7. მთლიანი პლეილისტის დაბეჭდვა

  printPlaylist() {
    let temp = this.head;
    const songs = [];

    while (temp) {
      songs.push(temp.data);
      temp = temp.next;
    }
    console.log(songs);
  }

  // 8. პლეილისტის შეტრიალება

  reversePlaylist() {
    let temp = null;
    let current = this.head;

    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }
    if (temp) {
      this.head = temp.prev;
    }
  }
}

const playlist = new Playlist();
playlist.addSong("Song 1");
playlist.addSong("Song 2");
playlist.addSong("Song 3");
//playlist.printPlaylist(); // "Song 1 -> Song 2 -> Song 3" 
playlist.nextSong(); // გადადის "Song 2"-ზე
//playlist.nextSong(); // გადადის "Song 3"-ზე
//playlist.previousSong(); // დაბრუნდება "Song 2"-ზე
//playlist.removeSong("Song 2");
//playlist.printPlaylist(); // "Song 1 -> Song 3"
//playlist.reversePlaylist();
//playlist.printPlaylist(); // "Song 3 -> Song 1" 

console.log(playlist); */

/* Stack - სტეკი */

// stack - დასტა. ახალ ელემენტს ვერც შიგნით და ვერც თავში. თუკი თავში ჩავამატეთ მაშინ გამოვა უკუ თვლა, ანუ პირველი ელემენტი ყველაზე ბოლო იქნება. LIFO - Last Input, First Output.
// stack - მონაცემთა სტრუქტურა, რომელსაც აქვს მხოლოდ ბოლო აქტიური და პირველად დამატებული ბოლოს გამოიძახება, ან ბოლოს დამატებული - პირველად.

/* class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  // stack-ის constructor
  constructor(first = null, last = null, size = 0) {
    this.first = first;
    this.last = last;
    this.size = size;
  }

  push = (value) => {
    let newNode = new Node(value);

    if (!this.first || this.size == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;

      this.first = newNode;
      newNode.next = temp;
    }
    return ++this.size;
  };

  pop = () => {
    if (!this.first || this.size == 0) return "First value not found.";
    if (this.first === this.last) {
      this.last = null;
    }

    let temp = this.first;

    this.first = temp.next;

    this.size--;

    return temp;
  };
}

let stack = new Stack();

stack.push("f");
stack.push("r");
stack.push("e");
stack.push("e");
stack.push("d");
stack.push("o");
stack.push("m");

stack.pop();
console.log(stack); */

/* ------------------------------------------ */

/* Queue - რიგი */
// queue - რიგი. მისი პრინციპი არის საპირისპირო stack-ის. ეს არის FIFO - First Input, First Output.
// dequeue - double end queue

/* ------------------------------------------ */

/* BinarySearchTree - ორობითი ძიების ხე */

// გვაქვს - root, child, parent, siblings, leaf, edge
// თუ ნაკლებია წავა მარჯვნივ რიცხვები, თუ მეტი, მაშინ მარცხნივ
// თითოეულ მშობელ კვანძს გააჩნია მაქსიმუმ 2 შვილი
// მშობელი კვანძის მარცხნივ მყოფი ყოველი კვანძი ნაკლებია მშობელზე და მარჯვნივ კი - მეტია

class Node {
  constructor(value = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  insert = (value) => {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;

      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return "Inserted node is already on a tree";
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;

          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;

          return this;
        }
        current = current.right;
      }
    }
  };
}

let BinaryTree = new BinarySearchTree();

BinaryTree.insert(10);
BinaryTree.insert(3);
BinaryTree.insert(14);
console.log(BinaryTree);
