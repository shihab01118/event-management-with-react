<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B.

<i>In the first line there is a variable "greeting" declared but it's value is not assigned. In the second line "greetign" is assigned with an empty object but it is never declared. So there will an error occur while consoling "greetign" in the third line. The error is RefferenceError</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C.

<i>There is a function declared. It recieves two parameters and it performs addition of that two parameters. The function is called later with two parameters. The first one is integer and the second one is string. In JavaScript, the + operator can be used for both addition and string concatenation. When one or both of the operands are strings, the + operator concatenates them. So the result will be 12.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A.

<i>In the first line there is declared an array named "food". In the second line an object is declared named "info" with the property "favouriteFood" assigned the value of the 1st element of "food" array. After that the value of "favouriteFood" is changed. But in javascript array doesn't change by refference. So the food array will remain unchanged.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B.

<i>There is a function declared named "sayHi" which recieves one parameter. Later it is called without any parameter. So the parameter was undefined when the function was called. So the answer will be "Hi there, undefined"</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B.

<i>In js, 0 is considered as falsy value. The count is 0 initially. Then there is an array with 4 numbers. Then forEach loop is iterated on "nums" array. In this loop there is an if statement which checks the value is truthy. Since 0 is a falsy value, so the first iteration will be rejected and the count will remain 0. After that all the iteration will pass through and the final count value will be 3.</i>

</p>
</details>