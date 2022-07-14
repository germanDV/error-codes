const path = require('path');
const fs = require('fs');
const readline = require('readline');
const { pointErrorCodes } = require('../dist/index');

const readmePath = path.resolve(__dirname, '..', 'README.md');
let updatedReadme = '';

function replaceContents() {
  fs.writeFileSync(readmePath, updatedReadme);
  console.log('Done updating README');
}

function generateTable() {
  updatedReadme += '| code | name | text |\n';
  updatedReadme += '| ---- | ---- | ---- |\n';

  for (let k in pointErrorCodes) {
    const e = pointErrorCodes[k];
    updatedReadme += `| ${e.code} | ${e.name} | ${e.text} |\n`;
  }

  replaceContents();
}

function updateReadme() {
  const rl = readline.createInterface({
    input: fs.createReadStream(readmePath),
  });

  let stopCopying = false;

  rl.on('line', line => {
    if (!stopCopying) {
      updatedReadme += line;
      updatedReadme += '\n';
    }

    if (line === '## Error Codes') {
      stopCopying = true;
      rl.close();
    }
  });

  rl.on('close', () => {
    generateTable();
  });
}

updateReadme();
