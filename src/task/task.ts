import { TaskBase } from './abstractTask.js'
import chalk from 'chalk';
import { ListTasks } from '../helpers/Enums/ListTaskEnum.js';

export class Task extends TaskBase{

    private _complete : string | null;

    constructor(task: string, id?: string, complete?: any) {
        super(task, id);
        this._complete = complete ?? null;
    }

    public showTask (listTasks: ListTasks): void {
        
        if (listTasks === ListTasks.normal) {
            console.log(`${chalk.blue('Description')}: ${this.description} \n${chalk.blue('Id')}: ${this.id} \n${chalk.blue('Completed')}: ${this._complete}\n`);
        }
        if (listTasks === ListTasks.completed && this._complete) {
            console.log(`${chalk.blue('Description')}: ${this.description} \n${chalk.blue('Id')}: ${this.id} \n${chalk.blue('Completed')}: ${this._complete}\n`);
        }
        if (listTasks === ListTasks.uncompleted && !this._complete) {
            console.log(`${chalk.blue('Description')}: ${this.description} \n${chalk.blue('Id')}: ${this.id} \n${chalk.blue('Completed')}: ${this._complete}\n`);
        }
    }
}