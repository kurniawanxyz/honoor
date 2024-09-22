import * as fs from 'fs-extra';
import * as path from 'path';

const baseDir = process.cwd(); // Mengambil direktori kerja saat ini
export function initializeProjectStructure() {
  const directories = ['domains', 'helpers', 'services', 'handlers', 'libs','repositories']; // Folder yang akan dibuat

  directories.forEach(dir => {
    const dirPath = path.join(`${baseDir}/src/`, dir);
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

export async function createFile(option: string, fileName: string) {
  try {
    let dirPaths: string[] = [];
    
    // Menentukan direktori berdasarkan opsi
    switch (option) {
      case 'service':
        dirPaths.push(path.join(baseDir, 'src/services'));
        break;
      case 'handler':
        dirPaths.push(path.join(baseDir, 'src/handlers'));
        break;
      case 'domain':
        dirPaths.push(path.join(baseDir, 'src/domains'));
        break;
      case 'repository':
        dirPaths.push(path.join(baseDir, 'src/repositories'));
        break;
      case 'helpers':
        dirPaths.push(path.join(baseDir, 'src/helpers'));
        break;
      case 'lib':
        dirPaths.push(path.join(baseDir, 'src/lib'));
        break;
      case 'resources':
        dirPaths.push(
          path.join(baseDir, 'src/domains'),
          path.join(baseDir, 'src/handlers'),
          path.join(baseDir, 'src/repositories'),
          path.join(baseDir, 'src/services')
        );
        break;
      default:
        console.error('Invalid option. Please use "service", "handler", "domain", "repository", "helpers", "lib", or "resources".');
        return;
    }

    // Membuat file di setiap direktori yang ditentukan
    for (const dirPath of dirPaths) {
      // Memastikan direktori untuk file sudah ada
      await fs.ensureDir(dirPath);

      // Menentukan path lengkap untuk file
      const filePath = path.join(dirPath, `${fileName}.ts`);

      // Menulis konten ke file
      await fs.writeFile(filePath, `// File ${option.charAt(0).toUpperCase() + option.slice(1)}: ${fileName}`, 'utf-8');

      console.log(`File ${option} sudah dibuat: ${fileName}.ts di ${dirPath}`);
    }
  } catch (err) {
    console.error(`Error creating file: ${err}`);
  }
}
