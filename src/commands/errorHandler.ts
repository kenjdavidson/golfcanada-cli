import chalk from "chalk";

export default function handleError (e: any) {
    if (e instanceof Error ) {
        chalk.red(e.message);
    } else {
        chalk.red(e);
    }
}