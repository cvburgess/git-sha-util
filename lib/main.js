'use strict';

(function() {

  const program = require('commander');
  const sha = require('./git-sha-util');
  const pkg = require('../package.json');

  program
    .version(pkg.version)
    .option('--npm', 'Saving SHA to package.json...');

    program.on('—help', () => console.log('-npm Saves a shortened copy of the SHA to your package.json'));

    program.parse(process.argv);

    if (process.argv.length === 2) {

      program.help();

    } else {

      try {
        sha.npm();
        console.log('Successfully saved SHA to package.json');
      } catch (error) {
        console.log('Could not save SHA to package.json');
      }

    }

}).call(this);
