const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

// delete all files in build directory and the directory too
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

// get path to read Campaign.sol
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
// the 2nd argument specifies the number of contract
const output = solc.compile(source, 1).contracts;
// console.log(output)

// check if there is a directory, and create new directory
fs.ensureDirSync(buildPath);

// create two json files of campaign and campaignFactory contracts
for (let contract in output) {
  fs.outputJSONSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    // 2nd argument is the content of each contract
    // using the key of each value
    output[contract]
  );
}