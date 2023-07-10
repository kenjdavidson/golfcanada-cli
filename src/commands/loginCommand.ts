import { Command } from 'commander';
import GolfCanadaClient from '../golfcanada/Client';
import { AuthError } from '../golfcanada/model/AuthToken';
import chalk from 'chalk';
import handleError from './errorHandler';

export interface HelpOptions { 
    username: string;
    password: string;
    export: boolean;
}

const loginAction = async (options: HelpOptions, command: Command) => {
    try {
        const authToken = await GolfCanadaClient.login(options.username, options.password)

        if (options.export) {
            
        }
    } catch (e) {
        handleError(e);
    }
}

export const loginCommand = new Command("login")
    .description("authenticate with username/password")
    .option("-u, --username [value]", "Golf Canada username")
    .option("-p, --password [value]", "Golf Canada password")
    .option("-e, --export", "exports authentication to GOLF_CANADA_AUTH_TOKEN")
    .action(loginAction)
    