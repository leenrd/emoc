const { prompt } = require('inquirer');
const chalk = require('chalk');

const { parseAndEvaluate } = require('./parse-and-evaluate');

const askQuestions = () => {
  const questions = [
    { name: 'COMMAND', type: 'input', message: chalk.blue('>') },
  ];

  return prompt(questions);
};

const repl = async () => {};

if (require.main === module) {
  console.log(
    chalk.red(`Welcome to the ${chalk.bgYellow('Emoc')} Programming Language`),
  );
  repl();
}

module.exports = repl;
