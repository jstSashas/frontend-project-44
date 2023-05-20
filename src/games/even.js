#!/usr/bin/env node

import { welcome, questAnsCompar } from '../index.js';

const brainEven = () => {
  welcome();
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(condition);
  const task = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const rightAnswer = (taskNow) => (taskNow % 2 === 0 ? 'yes' : 'no');
  questAnsCompar(task, rightAnswer);
};

export default brainEven;
