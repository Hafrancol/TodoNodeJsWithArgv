
import { access, readFile, constants} from 'node:fs/promises';

export const readF = async (filePath: string) => {

    try {
        await access(filePath, constants.R_OK | constants.W_OK);
        const contents = await readFile(filePath, { encoding: 'utf8' });
        return JSON.parse(contents);
      } catch {
        return false;
      }
}