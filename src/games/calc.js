import { welcome, questAnsCompar } from '../index.js';

const brainCalc = () => {
  welcome();
  const description = 'What is the result of the expression?';
  console.log(description);
  const task = () => {
    const symbols = ['+', '-', '*'];
    const getRandomIndex = () => Math.floor(Math.random() * symbols.length);
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const randomSymbol = symbols[getRandomIndex()];
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    const result = `${randomNumber1} ${randomSymbol} ${randomNumber2}`;
    return result;
  };
  const rightAnswer = (taskNow) => {
    let result;
    const array = taskNow.split(' ');
    switch (array[1]) {
      case '+':
        result = Number(array[0]) + Number(array[2]);
        break;
      case '-':
        result = Number(array[0]) - Number(array[2]);
        break;
      case '*':
        result = Number(array[0]) * Number(array[2]);
        break;
      default:
        result = null;
    }
    return result.toString();
  };
  questAnsCompar(task, rightAnswer);
};

export default brainCalc;
