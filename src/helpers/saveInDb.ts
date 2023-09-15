import { writeFile } from 'node:fs';

export const saveInDb = (list: any) => {
    writeFile('./db/tasks.json', JSON.stringify(list), (error) => {
        console.log(error);
    });
}
