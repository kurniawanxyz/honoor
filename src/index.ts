import * as fs from 'fs-extra';
import * as path from 'path';

const baseDir = process.cwd(); // Mengambil direktori kerja saat ini

const exampleCodes: { [key: string]: (fileName: string) => string } = {
  service: (fileName: string) => `
import {} from "../repositories"
// Contoh kode untuk service: ${fileName}Service\nexport function ${fileName}Service() {\n  // Implementasi service\n}`,
  handler: (fileName: string) => `
import { Hono, Context } from 'hono';

// Contoh kode untuk handler: ${fileName}Handler
const app = new Hono();
app.get('/', async(c: Context) => {
  c.text('Hello, World!');
});
  `,
  domain: (fileName: string) => `
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

// Contoh kode untuk domain: ${fileName}Domain
export const ${fileName}Domain = z.object({

})
export type ${fileName} = z.infer<typeof ${fileName}Domain>
;
  `,
  repository: (fileName: string) => `
const prisma = new PrismaClient();

// Contoh kode untuk repository: ${fileName}Repository
export const create${fileName}Repository = async (data: any) => {
  return await prisma.example.create({ data });
};

export const read${fileName}Repository = async (id: number) => {
  return await prisma.example.findUnique({ where: { id } });
};

export const update${fileName}Repository = async (id: number, data: any) => {
  return await prisma.example.update({ where: { id }, data });
};

export const delete${fileName}Repository = async (id: number) => {
  return await prisma.example.delete({ where: { id } });
};

export const list${fileName}Repository = async () => {
  return await prisma.example.findMany();
};
  `,
  helpers: (fileName: string) => `// Contoh kode untuk helper: ${fileName}Helper\nexport function ${fileName}Helper() {\n  // Implementasi helper\n}`,
  lib: (fileName: string) => `// Contoh kode untuk lib: ${fileName}Lib\nexport function ${fileName}Lib() {\n  // Implementasi lib\n}`
};

export function initializeProjectStructure() {
  const directories = ['domains', 'helpers', 'services', 'handlers', 'libs', 'repositories']; // Folder yang akan dibuat

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
    let fullFileName: string = '';

    // Menentukan direktori berdasarkan opsi
    switch (option) {
      case 'service':
        dirPaths.push(path.join(baseDir, 'src/services'));
        fullFileName = `${fileName}Service`;
        break;
      case 'handler':
        dirPaths.push(path.join(baseDir, 'src/handlers'));
        fullFileName = `${fileName}Handler`;
        break;
      case 'domain':
        dirPaths.push(path.join(baseDir, 'src/domains'));
        fullFileName = `${fileName}Domain`;
        break;
      case 'repository':
        dirPaths.push(path.join(baseDir, 'src/repositories'));
        fullFileName = `${fileName}Repository`;
        break;
      case 'helpers':
        dirPaths.push(path.join(baseDir, 'src/helpers'));
        fullFileName = `${fileName}Helper`;
        break;
      case 'lib':
        dirPaths.push(path.join(baseDir, 'src/lib'));
        fullFileName = `${fileName}Lib`;
        break;
      case 'resources':
        const resourceOptions = ['service', 'handler', 'domain', 'repository'];
        for (const resourceOption of resourceOptions) {
          await createFile(resourceOption, fileName);
        }
        return;
      default:
        console.error('Invalid option. Please use "service", "handler", "domain", "repository", "helpers", "lib", or "resources".');
        return;
    }

    // Membuat file di setiap direktori yang ditentukan
    for (const dirPath of dirPaths) {
      // Memastikan direktori untuk file sudah ada
      await fs.ensureDir(dirPath);

      // Menentukan path lengkap untuk file
      const filePath = path.join(dirPath, `${fullFileName}.ts`);

      // Menulis konten ke file
      await fs.writeFile(filePath, exampleCodes[option](fileName), 'utf-8');

      console.log(`File ${option} sudah dibuat: ${fullFileName}.ts di ${dirPath}`);
    }
  } catch (err) {
    console.error(`Error creating file: ${err}`);
  }
}
