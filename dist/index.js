"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeProjectStructure = initializeProjectStructure;
const fs = __importStar(require("fs-extra"));
const path = __importStar(require("path"));
function initializeProjectStructure() {
    const baseDir = process.cwd(); // Mengambil direktori kerja saat ini
    const directories = ['domains', 'helpers', 'usecase', 'handler', 'lib']; // Folder yang akan dibuat
    directories.forEach(dir => {
        const dirPath = path.join(baseDir, dir);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true }); // Membuat folder jika belum ada
            console.log(`Folder '${dir}' berhasil dibuat.`);
            // Membuat file index.ts di dalam folder
            const indexPath = path.join(dirPath, 'index.ts');
            fs.writeFileSync(indexPath, `// File index.ts untuk ${dir}`, 'utf8');
            console.log(`File 'index.ts' dibuat di dalam folder '${dir}'.`);
        }
    });
    console.log('Inisialisasi struktur project Hono.js selesai.');
}
