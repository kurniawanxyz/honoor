#!/usr/bin/env node

import { Command } from 'commander';
import { initializeProjectStructure } from '../index';

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

program.parse(process.argv);
