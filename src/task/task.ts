import { TaskBase } from './abstractTask'
const colors = require('colors');

export class Task extends TaskBase{

    private _complete : string | null;

    constructor(task: string, id?: string, complete?: any) {
        super(task, id);
        this._complete = complete ?? null;
    }

    override showTask(): void {
        console.log(`${colors.blue('Description')}: ${this.description} \n${colors.blue('Id')}: ${this.id} \n${colors.blue('Completed')}: ${this._complete}
        `)
    }

}