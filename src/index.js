import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');
const welcome = () => {
  console.log(`Hello, ${userName}!`);
};

const questAnsCompar = (task, rightAnswer) => {
  for (let i = 0; i < 3; i += 1) {
    const task1 = task();
    const rightAnswer1 = rightAnswer(task1);
    const question = `Question: ${task1}`;
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer1) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer1}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export { welcome, userName, questAnsCompar };
