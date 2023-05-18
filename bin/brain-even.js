#!/usr/bin/env node

import { welcome, questAnsCompar } from '../src/index.js';

welcome();

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(condition);

const task = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;

const rightAnswer = (task1) => (task1 % 2 === 0 ? 'yes' : 'no');

questAnsCompar(task, rightAnswer);
