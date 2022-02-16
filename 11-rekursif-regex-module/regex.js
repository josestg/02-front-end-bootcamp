// const inputs = ["bob", "boby", "bobby", "bobi", "masbob", "mrbob"];

// // mencari apapun yang memiliki kata bob didalamnya.
// const regex1 = new RegExp("bob");

// inputs.forEach((input) => {
//   console.log(input, regex1.test(input));
// });

// console.log("---------------");

// // mencari apapun yang memiliki awalan kata bob didalamnya.
// const regex2 = new RegExp("^bob");
// inputs.forEach((input) => {
//   console.log(input, regex2.test(input));
// });

// console.log("---------------");

// // mencari apapun yang memiliki akhiran kata bob didalamnya.
// const regex3 = new RegExp("bob$");
// inputs.forEach((input) => {
//   console.log(input, regex3.test(input));
// });

// console.log("---------------");
// // mencari apapun yang tepat memiliki kata bob.
// const regex4 = new RegExp("^bob$");
// inputs.forEach((input) => {
//   console.log(input, regex4.test(input));
// });

// Set

// kita hanya membolehkan input yang semuanya huruf kecil.
const onlyLowerCase = new RegExp("^[a-z]+$");

const strings = ["bob", "Bob", "BOB"];

strings.forEach((s) => {
  console.log(s, onlyLowerCase.test(s));
});

const simpleEmailValidation = new RegExp(
  "^[a-zA-Z0-9]+(\\.)?[a-zA-Z0-9]+@(mail|gmail|yahoo).(com|id|co.id)$"
);

const emails = [
  "abc@mail.com",
  "a.b@gmail.com",
  "jose@yahoo.com",
  "a.b.@mail.com",
  "ab.c.d@mail.com",
  "ab.c.....d.@mail.com",
  "a_b@mail.com",
  "123a.A@mail.com",
  ".abc@mail.com",
  "a#@mail.com",
  "@mail.com",
  "abc",
];

// contoh regex email sebenarnya:
// "^(?:(?:(?:(?:[a-zA-Z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\\x{00A0}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFEF}])+(?:\\.([a-zA-Z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\\x{00A0}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFEF}])+)*)|(?:(?:\\x22)(?:(?:(?:(?:\\x20|\\x09)*(?:\\x0d\\x0a))?(?:\\x20|\\x09)+)?(?:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x7f]|\\x21|[\\x23-\\x5b]|[\\x5d-\\x7e]|[\\x{00A0}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFEF}])|(?:(?:[\\x01-\\x09\\x0b\\x0c\\x0d-\\x7f]|[\\x{00A0}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFEF}]))))*(?:(?:(?:\\x20|\\x09)*(?:\\x0d\\x0a))?(\\x20|\\x09)+)?(?:\\x22))))@(?:(?:(?:[a-zA-Z]|\\d|[\\x{00A0}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFEF}])|(?:(?:[a-zA-Z]|\\d|[\\x{00A0}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFEF}])(?:[a-zA-Z]|\\d|-|\\.|~|[\\x{00A0}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFEF}])*(?:[a-zA-Z]|\\d|[\\x{00A0}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFEF}])))\\.)+(?:(?:[a-zA-Z]|[\\x{00A0}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFEF}])|(?:(?:[a-zA-Z]|[\\x{00A0}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFEF}])(?:[a-zA-Z]|\\d|-|\\.|~|[\\x{00A0}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFEF}])*(?:[a-zA-Z]|[\\x{00A0}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFEF}])))\\.?$"

emails.forEach((s) => {
  console.log(s, simpleEmailValidation.test(s));
});
