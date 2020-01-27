require('colors');
const emoji = require('node-emoji');

let beginningLength;

const printInfo = (endingLength) => {
  const sizeReduction = (((beginningLength - endingLength) / beginningLength) * 100).toFixed(1);
  console.log(`> This cleanup could reduce your file size by ~ ${sizeReduction}%\n`.yellow);
};

const printRejected = (rejectedTwigs, endingLength = 0) => {
  const sizeReduction = (((beginningLength - endingLength) / beginningLength) * 100).toFixed(1);
  console.log('\n> Useless CSS Found! - Validation Failed'.red.bold);
  console.log('  ________________________________________________________________\n');
  console.log('  Please review or add to whitelist definitions for the CSS below:\n');
  console.log(`  ${rejectedTwigs.join('\n  ')}\n\n`);
  console.log(`  This cleanup could reduce your file size by ~ ${sizeReduction}%\n`.yellow);
  return rejectedTwigs;
};

const printValidated = (files) => {
  console.log('\n> No Useless CSS - Validation Passed'.green.bold);
  console.log('  ________________________________________________________________\n');
  console.log(`  ${emoji.get(':white_check_mark:')}  ${files.join(`\n  ${emoji.get(':white_check_mark:')}  `)}\n`);
  return true;
};

const startLog = (cssLength) => {
  beginningLength = cssLength;
};

export default {
  printInfo,
  printRejected,
  printValidated,
  startLog,
};
