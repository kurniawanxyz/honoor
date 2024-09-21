#!/usr/bin/env node

import { Command } from 'commander';
import { initializeProjectStructure, createFile } from '../index';

const program = new Command();

program
  .name('honoor') // Nama CLI yang digunakan
  .description('honoor - CLI untuk setup project Hono.js dengan CRUD') // Deskripsi CLI
  .version('1.0.0');

program
  .command('init') // Perintah 'init' tanpa argumen
  .description('Inisialisasi struktur folder untuk project Hono.js') // Deskripsi command init
  .action(() => {
    initializeProjectStructure(); // Fungsi untuk menginisialisasi struktur folder
  });

  program
  .command('create <name>')
  .description('Create a new file')
  .option('-s, --service', 'Create a service file')
  .option('-rsc, --resources', 'Create a service,handler, domain, and repository file')
  .option('-h, --handler', 'Create a handler file')
  .option('-d, --domain', 'Create a domain file')
  .option('-hl, --helpers', 'Create a helpers file')
  .option('-r, --repository', 'Create a repository file')
  .option('-l, --lib', 'Create a lib file')
  .action(async (name, options) => {
    const types = Object.keys(options).filter(key => options[key]);
    if (types.length === 0) {
      console.error('Please specify a type using -s, -h, -d, -hl, -r, or -l.');
      process.exit(1);
    }
    await createFile(types[0], name);
  });


program.parse(process.argv);
