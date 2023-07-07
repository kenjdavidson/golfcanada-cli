import figlet from 'figlet';
import { Command } from 'commander';

const program = new Command()
    .version(process.env.npm_package_version || "x.y.z")
    .description(process.env.npm_package_description || "Golf Canada API")
    .parse(process.argv);

const options = program.opts();

console.log(figlet.textSync("Golf Canada"));
console.log(process.env)