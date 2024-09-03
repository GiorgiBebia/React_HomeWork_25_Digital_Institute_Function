// Homework 1
// Homework 1.1
function sumMult(num1, num2) {
  console.log(num1 + num2, num1 * num2);
}

// Homework 1.2
function twoStringLength(str1, str2) {
  const strings = str1 + str2;
  console.log(strings.length);
}

// Homework 1.3
function twoSumMult(num1, num2, num3) {
  console.log((num1 + num2) * num3);
}

// Homework 1.6 // Homework 1.7

// increaseDecrease(1, 2); arrow ფუნქციის გამოძახება შექმნამდე აგდებს ერორს

// Homework 1.6 // Homework 1.7

// Homework 1.4
const squareCube = (num) => console.log(Math.pow(num, 2), Math.pow(num, 3));

// Homework 1.5
const longString = (str1, str2) =>
  str1.length > str2.length
    ? console.log(`პირველი სიტყვა უფრო დიდია ვიდრე მეორე`)
    : str2.length > str1.length
    ? console.log(`მეორე სიტყვა უფრო დიდია ვიდრე პირველი`)
    : console.log(`მეორე და მეორე სიტყვა ერთმანეთის ტოლია`);

// Homework 1.5 // Homework 1.6

const increaseDecrease = (num1, num2) => {
  const x = num1 + num2;
  const y = num1 - num2;
  console.log(x, y);
};

// Homework 1.6 // Homework 1.7
sumMult(1, 2);
twoStringLength("Giorgi", "Bebia");
twoSumMult(1, 2, 3);
squareCube(2);
longString("Giorgi", "Bebia");
increaseDecrease(1, 2);

// Homework 2
// Homework 2.1

const ran1 = Math.floor(Math.random(0) * 5);
console.log(ran1);

// Homework 2.2
const randomNumber = Math.floor(Math.random(0) * 10);
console.log(randomNumber);
// Math.floor(0.2), კონსოლში დაიბეჭდება 0-დან 10-მდე
// Math.floor(2.2), კონსოლში დაიბეჭდება 2-დან 10-მდე
// Math.floor(4.5), კონსოლში დაიბეჭდება 4-დან 10-მდე
// Math.floor(5.002), კონსოლში დაიბეჭდება 5-დან 10-მდე
// Math.floor(99.999), კონსოლში დაიბეჭდება 0-დან 10-მდე
// Math.floor(90.29); კონსოლში დაიბეჭდება 0-დან 10-მდე

// Homework 3
// Homework 3.1
function threeRandomNumber() {
  console.log(Math.random() + Math.random() + Math.random());
}
// Homework 3.2
function randomColor() {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  document.querySelector("p").style.color = `#${color}`;
}
randomColor();
