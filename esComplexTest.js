const escomplex = require('escomplex');
const fs = require('fs');
const filePath = './public/serviceworker.js';
const fileContents = fs.readFileSync(filePath, 'utf8');

const source = [{
    path: filePath,
    code: fileContents
}]
// const source = 'F:\\front-end\\react start\\weather - pwa\\public\\index.html';
const result = escomplex.analyse(source);


console.log(result);
console.log(JSON.stringify(result, null, 2));