#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { welcome, userName } from './welcome.js';

welcome();

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(condition);

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

for (let i = 0; i < 3; i += 1) {
  const range = getRandomInRange(1, 100);
  const question = `Question: ${range}`;
  console.log(question);
  const answer = readlineSync.question('Your answer: ');
  const evenNumber = range % 2 === 0 ? 'yes' : 'no';
  if (answer === evenNumber) {
    console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${evenNumber}'`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
}
