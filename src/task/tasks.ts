import { Task } from "./task.js";
import { saveInDb } from "../helpers/saveInDb.js";
import chalk from 'chalk';
import { ListTasks } from "../helpers/Enums/ListTaskEnum.js";
import { Answers } from "inquirer";

export class Tasks {

    private _ListTasks: any;

    constructor() {
        this._ListTasks = {};
    }

    /**
     *
     *
     * @param {string} descripciion
     * @memberof Tasks
     */
    public createNewTask(descripciion: string): void {
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
    
    public listarTareas(listTask : ListTasks): void {
        if(this.isLisTaskEmpty){
            console.log(`${chalk.blue("No hay lista de tareas...")}`);
            return;
        }
        const tasks: Task[] = Object.values(this._ListTasks);
        tasks.forEach(tasks => {
            tasks.showTask(listTask);
        });
    }

    private get isLisTaskEmpty() : boolean {
        return JSON.stringify(this._ListTasks) == JSON.stringify({});
    }

    get listTask () {
        return this._ListTasks;
    }

    public deleteTask (id: string): void{
        delete this._ListTasks[id];
        saveInDb(this._ListTasks);
    }

    public completarTareas = (idTaskCompleted: Answers[]) => {

        Object.values(this._ListTasks).forEach((task: any)=> {
            if(idTaskCompleted.includes(task._id)){
                this._ListTasks[task._id]['_complete']= new Date().toISOString();
            }
            else {
                this._ListTasks[task._id]['_complete']= null;
            }
        })
        saveInDb(this._ListTasks);
    }
}