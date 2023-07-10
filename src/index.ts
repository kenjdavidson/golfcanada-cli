#!/usr/bin/env node

import { Command } from 'commander';
import { loginCommand } from './commands/loginCommand';

const program = new Command()
    .version("1.0.0")
    .description("Access Golf Canada profile and scoring history through command line.");

program.addCommand(loginCommand);

program.parse(process.argv);
