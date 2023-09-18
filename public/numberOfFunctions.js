const fs = require('fs');
const esprima = require('esprima');
const code = fs.readFileSync('serviceworker.js', 'utf-8');


const ast = esprima.parseScript(code);
let arrowFunctionCount = 0;
function traverse(node) {
    if (node.type === 'ArrowFunctionExpression') {
        arrowFunctionCount++;
    }

    for (const key in node) {
        if (node[key] && typeof node[key] === 'object') {
            traverse(node[key]);
        }
    }
}

traverse(ast);

console.log('Number of arrow functions:', arrowFunctionCount);