#!/usr/bin/env node

'use strict';

const { parseArgs } = require('node:util');

const options = {
  repo: {
    type: 'string',
    short: 'r',
  },
  help: {
    type: 'boolean',
    short: 'h',
    default: false,
  },
};

function printUsage() {
  console.log(`
Usage: bug-agent --repo <repository>

Options:
  --repo, -r   Repository to analyse (e.g. "owner/repo")  [required]
  --help, -h   Show this help message
`.trim());
}

function main() {
  let values;
  try {
    ({ values } = parseArgs({ options, allowPositionals: false }));
  } catch (err) {
    console.error(`Error: ${err.message}`);
    printUsage();
    process.exit(1);
  }

  if (values.help) {
    printUsage();
    process.exit(0);
  }

  if (!values.repo) {
    console.error('Error: --repo argument is required');
    printUsage();
    process.exit(1);
  }

  const repo = values.repo;
  console.log(`bug-agent starting for repository: ${repo}`);
  // TODO: implement agentic code review and bug testing logic
}

main();
