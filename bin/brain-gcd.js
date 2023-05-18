#!/usr/bin/env node

import { welcome, questAnsCompar } from '../src/index.js';

welcome();

const condition = 'Find the greatest common divisor of given numbers.';
console.log(condition);

const task = () => {
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);
  const result = `${randomNumber1} ${randomNumber2}`;
  return result;
};

const rightAnswer = (taskNow) => {
  const array = taskNow.split(' ');
  let a = array[0];
  let b = array[1];
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  const result = a + b;
  return result.toString();
};

questAnsCompar(task, rightAnswer);
