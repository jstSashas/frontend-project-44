import readlineSync from 'readline-sync';

const NUM_OF_REQUIRED_CORRECT_ANSWERS = 3;

// переименуй в runGameEngine
const runGameEngine = (description, generateRound) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  // 3 -- magick number, давай вынесем в константу NUM_OF_REQUIRED_CORRECT_ANSWERS
  for (let i = 0; i < NUM_OF_REQUIRED_CORRECT_ANSWERS; i += 1) {
    const { question, rightAnswer } = generateRound();

    const questionMessage = `Question: ${question}`;
    console.log(questionMessage);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export { runGameEngine };
