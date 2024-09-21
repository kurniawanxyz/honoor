#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const index_1 = require("../index");
const program = new commander_1.Command();
program
    .name('honoor') // Nama CLI yang digunakan
    .description('honoor - CLI untuk setup project Hono.js dengan CRUD') // Deskripsi CLI
    .version('1.0.0');
program
    .command('init') // Perintah 'init' tanpa argumen
    .description('Inisialisasi struktur folder untuk project Hono.js') // Deskripsi command init
    .action(() => {
    (0, index_1.initializeProjectStructure)(); // Fungsi untuk menginisialisasi struktur folder
});
program.parse(process.argv);
