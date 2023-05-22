import { runGameEngine } from '../index.js';

const description = 'What is the result of the expression?';

const mathOperators = ['+', '-', '*'];

const getRandomMathOperator = () => mathOperators[Math.floor(Math.random() * mathOperators.length)];

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;

    case '-':
      return number1 - number2;

    case '*':
      return number1 * number2;

    default:
      throw new Error('The mathematical operator is missing. The operator must be "+", "-" or "*".');
  }
};

const MIN_NUM_VALUE = 1;
const MAX_NUM_VALUE = 100;

const generateRound = () => {
  const randomMathOperator = getRandomMathOperator();
  const randomNumber1 = getRandomNumber(MIN_NUM_VALUE, MAX_NUM_VALUE);
  const randomNumber2 = getRandomNumber(MIN_NUM_VALUE, MAX_NUM_VALUE);
  const question = `${randomNumber1} ${randomMathOperator} ${randomNumber2}`;

  const rightAnswer = String(calculate(randomNumber1, randomNumber2, randomMathOperator));

  return {
    question,
    rightAnswer,
  };
};

// переименуй в runBrainCalc, так как это функция. а функция -- это действие, должен быть глагол
const runBrainCalc = () => {
  runGameEngine(description, generateRound);
};

export default runBrainCalc;
