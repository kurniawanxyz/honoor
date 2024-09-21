import * as fs from 'fs-extra';
import * as path from 'path';

export function initializeProjectStructure() {
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
