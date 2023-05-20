#!/usr/bin/env node

import { welcome, questAnsCompar } from '../src/index.js';

welcome();

const condition = 'What number is missing in the progression?';
console.log(condition);

const task = () => {
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const array = [];
  const step = getRandomNumber(1, 10);
  const len = getRandomNumber(5, 10);
  array[0] = getRandomNumber(0, 100);
  for (let i = 1; i <= len; i += 1) {
    array[i] = array[i - 1] + step;
  }
  const hiddenNumber = getRandomNumber(0, len);
  array.splice(hiddenNumber, 1, '..');
  return array.join(' ');
};

const rightAnswer = (taskNow) => {
  const array = taskNow.split(' ');
  const hiddenIndex = array.indexOf('..');
  let result;
  if (hiddenIndex === 0) {
    const step = array[hiddenIndex + 2] - array[hiddenIndex + 1];
    result = Number(array[hiddenIndex + 1]) - step;
    return result.toString();
  }
  if (hiddenIndex === array.length - 1) {
    const step = array[hiddenIndex - 1] - array[hiddenIndex - 2];
    result = Number(array[hiddenIndex - 1]) + step;
    return result.toString();
  }
  const step = (array[hiddenIndex + 1] - array[hiddenIndex - 1]) / 2;
  result = Number(array[hiddenIndex - 1]) + step;
  return result.toString();
};

questAnsCompar(task, rightAnswer);
