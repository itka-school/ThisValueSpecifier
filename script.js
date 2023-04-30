// "use strict";

let a = this;
// console.log("a --> ", a);
// console.log("log --> ", this);

const basic = function () {
  console.log("basic --> ", this);
};

const arrow = () => {
  console.log("arrow --> ", this);
};

// basic();
// arrow();

const obj = {
  greetings: "Hi! I am testObj",
  logThisBasic: function () {
    console.log("obj.logThisBasic() --> ", this);
  },
  logThisArrow: () => {
    console.log("obj.logThisArrow() --> ", this);
  },
};

// obj.logThisBasic();
// obj.logThisArrow();

const nestedObjects = {
  getThis() {
    console.log("0", this);
  },

  level1: {
    name: "First level",
    getThis() {
      console.log("1", this);
    },

    level2: {
      name: "Second level",
      getThis() {
        console.log("2", this);
      },

      level3: {
        name: "Third level",
        getThis() {
          console.log("3", this);
        },
      },
    },
  },
};

// nestedObjects.getThis();
// nestedObjects.level1.getThis();
// nestedObjects.level1.level2.getThis();
// nestedObjects.level1.level2.level3.getThis()

const matreshka = {
  name: "Matreshka",
  ref: this,
  matreshechka: { name: "Matreshechka", ref: this },
};

// console.log("matreshka.ref --> ", matreshka.ref);
// console.log("matreshka.matreshechka.ref --> ", matreshka.matreshechka.ref);

const obj2 = {
  name: "I am obj2",
  user: matreshka,
  getThis() {
    return this.user.matreshechka.ref;
  },
};

// console.log("obj2.getThis() --> ", obj2.getThis());

function Bill() {
  // this: {};
  this.name = "Bill";
  this.age = 21;
  this.getThisBasic = function () {
    console.log("getThisBasic --> ", this);
  };
  this.ref = this;
}

const bill = new Bill();

// console.log("bill new --> ", bill);
// console.log("bill.ref new --> ", bill.ref);
// bill.getThisBasic();

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.getThisBasic = function () {
    console.log("getThisBasic --> ", this);
  };
  this.ref = this;
}

const kate = new Person("Kate", 18);
const alesya = new Person("Alesya", 21);

// kate.getThisBasic();
// alesya.getThisBasic();

// this  это Window
function Man(name, age) {
  this.name = name;
  this.age = age;
}

const person = new Man("Alex", 12);

class Employee {
  // this: {}
  constructor(name = "", surname = "", jobTitle = "", salary = 300) {
    this.name = name;
    this.surname = surname;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.logFulName = () =>
      console.log(`Полное имя: ${this.name} ${this.surname}`);
  }

  logFullEmployersData() {
    console.log(
      `Имя: ${this.name} Фамилия: ${this.surname}, Должность: ${this.jobTitle}, Зарплата: ${this.salary}$`
    );
  }

  getThis() {
    console.log("class", this);
  }
}

const director = new Employee("Bill", "Murrey", "Commercial Director", 6000);
const frontend = new Employee("Jonn", "Travolta", "Frondend programmer", 2500);
// console.log(director)
// console.log(frontend)
// director.logFulName()
// director.logFullEmployersData()
// director.getThis();
// frontend.getThis();

const liElements = document.querySelectorAll("li");
liElements.forEach((el) =>
  el.addEventListener("click", function () {
    console.log(this);
  })
);
liElements.forEach((el) =>
  el.addEventListener("click", () => console.log(this))
);

const glasha = function () {
  return {
    name: "Glasha",
    ref: this,
  };
};

console.log("glasha.ref --> ", glasha.ref);
// console.log("glasha() -> ", glasha());
// console.log("glasha.call() -> ", glasha.call());

const user = {
  name: "Petr",
  age: 45,
  isAdmin: true,
  logInfo(mail, phone) {
    console.group(`${this.name} info:`);
    console.log(`User name is: ${this.name}`);
    console.log(`User age: ${this.age}`);
    console.log(
      `${
        this.isAdmin
          ? "Access to advanced settings"
          : "No access to advanced settings"
      }`
    );
    console.log(`E-mail: ${mail}`);
    console.log(`Phone: ${phone}`);
    console.groupEnd();
  },
};

// user.logInfo();

const dyna = {
  name: "Dyna",
  age: 16,
  isAdmin: false,
};

// user.logInfo.call(dyna, "dyna@google.com", "+37529-234-44-44");
// user.logInfo.bind(dyna, "dyna@google.com", "+37529-234-44-44");
// user.logInfo.bind(dyna, "dyna@google.com", "+37529-234-44-44")();
// user.logInfo.apply(dyna, ["dyna@google.com", "+37529-234-44-44"]);

const superObj = {
  getThis: function () {
    console.log("superObj getThis --> ", this); // {getThis: f}

    function getThis2() {
      console.log("superObj getThis2 --> ", this); // Window
    }

    const getThis3 = () => {
      console.log("superObj getThis3 --> ", this); // {getThis: f}
    };

    const getThis4 = function () {
      console.log("superObj getThis4 --> ", this); // {name: Dyna, ///}
    };

    getThis2();
    getThis3();
    getThis4.call(dyna);
  },
};

superObj.getThis();
