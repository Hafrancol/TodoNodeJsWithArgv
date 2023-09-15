interface Iopt {
    opt: number
  }

const inquirer  = require('inquirer');
const colors = require('colors');


const questions = [
    {
      type: 'list',
      name: 'opt',
      message: 'Que opcion quiere eleguir ? ',
      choices: 
        [    new inquirer.Separator(),
            {name: `${colors.green(1)}. Crear tarea`, value: 1},
            {name: `${colors.green(2)}. Listar tarea`, value: 2},
            {name: `${colors.green(3)}. Listar tareas completadas`, value: 3},
            {name: `${colors.green(4)}. Listar tareas pendintes`, value: 4},
            {name: `${colors.green(5)}. Completar tareas`, value: 5},
            {name: `${colors.green(6)}. Borrar tareas`, value: 6},
            {name: `${colors.green(0)}. Salir`, value: 0}

        ]
    },
  ];
  
export const showMenu = async (): Promise<number> => {

    console.clear();
    console.log(colors.green('==================================='));
    console.log(colors.green('  Selecione una opcion '));
    console.log(colors.green('==================================='));

    const { opt } : Iopt = await inquirer.prompt(questions);
    return opt;
}


export const pressEnter = async (): Promise<void> => {

    const question = {
        type: 'input',
        name: 'enter',
        message : `Presione ${colors.red('Enter')} para continuar ...`
    }

    const res = await inquirer.prompt(question);
}


export const createNewTask = async (): Promise<string> => {

  const question = {
      type: 'input',
      name: 'task',
      message : `Agrege una nueva tarea: `
  }

  const { task }: {task: string} = await inquirer.prompt(question);
  return task;
}





