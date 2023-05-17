#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { welcome, userName } from '../src/index.js';

welcome();

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(condition);

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

for (let i = 0; i < 3; i += 1) {
  const task = getRandomInRange(1, 100);
  const question = `Question: ${task}`;
  console.log(question);
  const userAnswer = readlineSync.question('Your answer: ');
  const rightAnswer = task % 2 === 0 ? 'yes' : 'no';
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
