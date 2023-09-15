const { v4: uuidv4 } = require('uuid');

export abstract class TaskBase {

    private _description: string;
    private _id: string;


    constructor(description: string, id?: string){
        this._description = description;
        this._id = id ?? uuidv4();
    }

    get description(): string {
        return this._description;
    }

    get id(): string {
        return this._id;
    }

    showTask() { };
}