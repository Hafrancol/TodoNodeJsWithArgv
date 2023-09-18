interface Iopt {
    opt: number
  }

import inquirer, { Answers, QuestionCollection } from 'inquirer';
import chalk from 'chalk';


const questions = [
    {
      type: 'list',
      name: 'opt',
      message: 'Que opcion quiere eleguir ? ',
      choices: 
        [    new inquirer.Separator(),
            {name: `${chalk.green(1)}. Crear tarea`, value: 1},
            {name: `${chalk.green(2)}. Listar tarea`, value: 2},
            {name: `${chalk.green(3)}. Listar tareas completadas`, value: 3},
            {name: `${chalk.green(4)}. Listar tareas pendintes`, value: 4},
            {name: `${chalk.green(5)}. Completar tareas`, value: 5},
            {name: `${chalk.green(6)}. Borrar tareas`, value: 6},
            {name: `${chalk.green(0)}. Salir`, value: 0}

        ]
    },
  ];
  
export const showMenu = async (): Promise<number> => {

    console.clear();
    console.log(chalk.green('==================================='));
    console.log(chalk.green('  Selecione una opcion '));
    console.log(chalk.green('==================================='));

    const { opt } : Iopt = await inquirer.prompt(questions);
    return opt;
}


export const pressEnter = async (): Promise<void> => {

    const pressEnter : QuestionCollection = {
        type: 'input',
        name: 'enter',
        message : `Presione ${chalk.red('Enter')} para continuar ...`
    }

    const res = await inquirer.prompt(pressEnter);
}


export const createNewTask = async (): Promise<Answers> => {

  const newTask: QuestionCollection= {
      type: 'input',
      name: 'task',
      message : `Agrege una nueva tarea: `
  }

  const { task } : Answers = await inquirer.prompt(newTask);
  console.log(task)
  return task;
}





