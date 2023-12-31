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
  console.clear();
  const newTask: QuestionCollection= {
      type: 'input',
      name: 'task',
      message : `Agrege una nueva tarea: `
  }

  const { task } : Answers = await inquirer.prompt(newTask);
  return task;
}


export const completarTareas = async (listTasks: any): Promise<Answers[]> => {

  const choices = Object.values(listTasks).map((task: any) => {

    const{_description, _complete, _id} = task;
    return { 
    name:_description,
    value:_id,
    checked: _complete ? true : false
    }

  })

  const question = [{
    type:'checkbox',
    name: 'check',
    message: 'Please update the state of the task',
    choices
  }]

  const { check } = await inquirer.prompt(question);
  return check;
}



export const deleteTask = async (listTask: any) => {
  console.clear();
  const choices =  Object.values(listTask).map((task: any, index: number)=> {
  const{_description, _complete, _id} = task;
  return {
    name: `${chalk.green(index + 1)}. ${_description}`,
    value: _id
  }
 })

 choices.unshift({
  name: `${chalk.green(0)}. ${chalk.blueBright('Retornar sin eliminar tarea')}`,
  value: '0'
});

 const questions = [
  {
    type: 'list',
    name: 'taskDeleted',
    message: 'Seleciona la tarea que quieres borrar...',
    choices
  }
 ]
 const { taskDeleted } : Answers = await inquirer.prompt(questions)
 return taskDeleted;
  
}




