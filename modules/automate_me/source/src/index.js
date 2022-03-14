const { exec } = require("child_process")
const ccc = require("clear_concise_creative")



/**
 * @description 
 * Will run .sh file 
 * @example 
 * // lets say you have a script.sh file
 * runFile("script")
 * @author zen-out
 * @date 2022-03-06
 * @param {any} fileName
 * @returns {any}
 */
export function runFile(fileName) {
    exec(`./${fileName}.sh`, (error, stdout, stderr) => {
        console.log(stdout)
    });
}

/**
 * @example
 * // 
 * runCommand("echo hello")
 * @author zen-out
 * @date 2022-03-06
 * @param {any} command
 * @returns {any}
 */
export function runCommand(command) {
    exec(`${command}`, (error, stdout, stderr) => {
        console.log(stdout)
    });
}

/**
 * @example
 * createFile("hello") // will create hello.sh file
 * @author zen-out
 * @date 2022-03-06
 * @param {any} fileName
 * @returns {any}
 */
export function createFile(fileName) {
    let getTemplate = ccc.readFile("./create.sh")
    let writeTemplate = ccc.writeFile(`./${fileName}.sh`, getTemplate)
    exec(`chmod u+x ${fileName}.sh`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
    });
}