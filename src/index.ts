import { pressEnter, showMenu, createNewTask, deleteTask, completarTareas} from "./helpers/inquirer.js";
import { Tasks } from "./task/tasks.js";
import { readF } from "./helpers/readFile.js";
import { ListTasks } from "./helpers/Enums/ListTaskEnum.js";
import { Answers } from "inquirer";
import { mkdir } from 'node:fs';

const main = async () => {

mkdir('./db', { recursive: true }, (err) => {
  if (err) throw err;
}); 
  const tasks: Tasks = new Tasks();
  let option: number = 0;

  const file: any = await readF('./db/tasks.json');
  if(file){
    tasks.loadTaskFromFile(file);
  }

do {
  option = await showMenu();
  switch(option){
    case 1: // crear tarea
      const description: any = await createNewTask();
      tasks.createNewTask(description);;
      break;
    case 2:// listar tareas
      tasks.listarTareas(ListTasks.normal);
      break;
    case 3:
      tasks.listarTareas(ListTasks.completed);
      break;
    case 4:
      tasks.listarTareas(ListTasks.uncompleted);
      break;
    case 5:
      const IdCompleted : Answers[] = await completarTareas(tasks.listTask);
      tasks.completarTareas(IdCompleted);

      break;
    case 6:
      const idTaskDeleted: string = await deleteTask(tasks.listTask);
      if(idTaskDeleted !== '0'){
        tasks.deleteTask(idTaskDeleted);
      }
      break;
    default:
      await pressEnter();
  }

  await pressEnter();

} while ( option !== 0);


}


main();



