import { Task } from "./task";
import { saveInDb } from "../helpers/saveInDb";
const colors = require('colors');

export class Tasks {

    private _ListTasks: any;

    constructor() {
        this._ListTasks = {};
    }


    public createNewTask(descripciion: string) {
        const task: Task = new Task(descripciion);
        this._ListTasks[task.id] = task;
        saveInDb(this._ListTasks);
        
    }

    public loadTaskFromFile(listTask: any) {
        Object.values(listTask).forEach((elem: any)=>{
            const{_description, _complete, _id} = elem;
            this._ListTasks[_id] = new Task(_description, _id, _complete);
        });
    }
    
  

    public listarTareas(): void {
        if(JSON.stringify(this._ListTasks) == JSON.stringify({})){
            console.log(`${colors.blue("No hay lista de tareas...")}`);
            return;
        }
        const tasks: Task[] = Object.values(this._ListTasks);
        tasks.forEach(tasks => {
            tasks.showTask();
        });
    }


}