#!/usr/bin/env node

import { welcome, questAnsCompar } from '../src/index.js';

welcome();

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
console.log(condition);

const task = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;

const rightAnswer = (taskNow) => {
  let result;
  if (taskNow === 1) {
    result = 'no';
    return result;
  }
  if (taskNow === 2) {
    result = 'yes';
    return result;
  }
  for (let i = 2; i < taskNow; i += 1) {
    if (taskNow % i === 0) {
      result = 'no';
      return result;
    }
  }
  result = 'yes';
  return result;
};

questAnsCompar(task, rightAnswer);
