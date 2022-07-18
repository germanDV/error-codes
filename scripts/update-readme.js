const path = require('path');
const fs = require('fs');
const readline = require('readline');
const { pointErrorCodes } = require('../dist/index');

(function updateReadme() {
  const readmePath = path.resolve(__dirname, '..', 'README.md');
  const updatedReadmePath = path.resolve(__dirname, '..', 'README.md.tmp');
  const writer = fs.createWriteStream(updatedReadmePath);
  const reader = readline.createInterface({ input: fs.createReadStream(readmePath) });
  let stopCopying = false;

  // Copy all the README up to the '## Error Codes' line (included).
  reader.on('line', line => {
    if (!stopCopying) {
      writer.write(`${line}\n`);
    }

    if (line === '## Error Codes') {
      stopCopying = true;
      reader.close();
    }
  });

  // Write the errors table.
  reader.on('close', () => {
    writer.write('| code | name | text |\n| ---- | ---- | ---- |\n');

    for (let k in pointErrorCodes) {
      const e = pointErrorCodes[k];
      writer.write(`| ${e.code} | ${e.name} | ${e.text} |\n`);
    }

    fs.renameSync(updatedReadmePath, readmePath);
  });
})();
