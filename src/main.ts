#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
const version = require('../package.json').version;

console.log(`$name$ v${version}`);

yargs(hideBin(process.argv))
  .commandDir('commands', {
    visit(commandModule) {
      return commandModule;
    },
    extensions: ['js', 'ts']
  })
  .strict()
  .alias({ h: 'help' })
  .argv;


