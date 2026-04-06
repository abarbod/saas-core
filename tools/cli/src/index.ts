#!/usr/bin/env node

const [, , command = 'help'] = process.argv;

const commands: Record<string, string> = {
  help: 'Show available commands',
  init: 'Scaffold a new CoreForge module (planned)',
  generate: 'Generate DTO/service/controller templates (planned)',
  doctor: 'Inspect local environment health (planned)'
};

if (!commands[command]) {
  console.error(`Unknown command: ${command}`);
  process.exit(1);
}

console.log(`coreforge ${command}`);
console.log(commands[command]);
