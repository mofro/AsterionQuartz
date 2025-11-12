import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync, copyFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceDir = join(__dirname, 'static');
const destDir = join(__dirname, 'public', 'images');

// Ensure destination directory exists
if (!existsSync(destDir)) {
  mkdirSync(destDir, { recursive: true });
}

// List of files to copy
const filesToCopy = [
  'a_still_of_parchment_paper.png',
  'icon.png'
];

// Copy each file
filesToCopy.forEach(file => {
  const sourcePath = join(sourceDir, file);
  const destPath = join(destDir, file);
  
  if (existsSync(sourcePath)) {
    copyFileSync(sourcePath, destPath);
    console.log(`Copied ${file} to ${destPath}`);
  } else {
    console.warn(`Warning: ${file} not found in static directory`);
  }
});

console.log('Asset copy complete!');
