
import { readFileSync } from 'node:fs';

/**
 * readF is a Sync function and stopt the treath.
 * 
 *  If the file exist return the value.
 *  If the file doesn't return undefined
 * @param {string} filePath
 * @return {*} 
 */
export const readF = async (filePath: string) => {

  try {
    const contents = readFileSync(filePath,{encoding:'utf-8'});
    return JSON.parse(contents);
  } catch (error) {
    console.log(error);
  }
}