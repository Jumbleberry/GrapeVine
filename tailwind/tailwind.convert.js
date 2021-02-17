const fs = require('fs');
const path = require('path');
const TailwindConfig = require('../../../../tailwind.config');
const colors = TailwindConfig.theme.colors;
const outPath = path.join(__dirname, 'theme-tailwind-variables.scss');

// If the file exists, delete it.
fs.unlink(outPath, err => {
  if (err && err.code !== 'ENOENT') return console.error(err);

  // Iterate through the colors property of the tailwinds config
  // and create a scss variable for each color.
  iterate(colors, '$--tw');

  function iterate(myObject, lineKey) {
    Object.keys(myObject).forEach(key => {
      let newLineKey = lineKey;
      if (typeof (myObject[key]) === 'string') {
        newLineKey += `${key === 'DEFAULT' ? '' : '-' + key}`;
        writeFile(`${newLineKey}: ${(myObject[key].toLowerCase())};\n`, key);
      }
      if (typeof (myObject[key]) === 'object') {
        newLineKey += iterate(myObject[key], `${newLineKey}-${key}`);
      }
    });
    return lineKey;
  }
  function writeFile(line, key = '') {
    fs.appendFile(outPath, line, err => {
      if (err) return console.error(err);
    });
  }
});
