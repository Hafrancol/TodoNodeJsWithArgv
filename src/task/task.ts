import { TaskBase } from './abstractTask.js'
import chalk from 'chalk';

export class Task extends TaskBase{

    private _complete : string | null;

    constructor(task: string, id?: string, complete?: any) {
        super(task, id);
        this._complete = complete ?? null;
    }

    override showTask(): void {
        console.log(`${chalk.blue('Description')}: ${this.description} \n${chalk.blue('Id')}: ${this.id} \n${chalk.blue('Completed')}: ${this._complete}
        `)
    }
}