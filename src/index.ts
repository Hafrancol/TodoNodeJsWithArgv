import { pressEnter, showMenu, createNewTask} from "./helpers/inquirer";
import { TaskBase } from "./task/abstractTask";
import { Tasks } from "./task/tasks";
import { Task } from "./task/task";
import { readF } from "./helpers/readFile";



const main = async () => {
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
      const description = await createNewTask();
      tasks.createNewTask(description);;
      break;
    case 2:// listar tareas
      tasks.listarTareas();
      break;
    case 3:
      console.log("case 3");
      break;
    case 4:
      console.log("case 4");
      break;
    case 5:
      console.log("case 5");
      break;
    case 6:
      console.log("case 6");
      break;
    default:
      await pressEnter();
  }

  await pressEnter();

} while ( option !== 0);


}


main();



