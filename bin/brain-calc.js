#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { welcome, userName } from '../src/index.js';

welcome();

const description = 'What is the result of the expression?';
console.log(description);

const symbols = ['+', '-', '*'];
const getRandomIndex = () => Math.floor(Math.random() * symbols.length);
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

for (let i = 0; i < 3; i += 1) {
  const randomSymbol = symbols[getRandomIndex()];
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);
  const task = `${randomNumber1} ${randomSymbol} ${randomNumber2}`;
  const question = `Question: ${task}`;
  console.log(question);
  let result;
  switch (randomSymbol) {
    case '+':
      result = randomNumber1 + randomNumber2;
      break;
    case '-':
      result = randomNumber1 - randomNumber2;
      break;
    case '*':
      result = randomNumber1 * randomNumber2;
      break;
    default:
      result = null;
  }
  const userAnswer = readlineSync.question('Your answer: ');
  const rightAnswer = result.toString();
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
}
