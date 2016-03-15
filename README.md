# git-sha-util
Utility for getting the current HEAD SHA value from git

## installation

`npm install git-sha-util`

## usage

### CLI

- To get the current SHA: `$ git-sha --sha`
- To get the current, short SHA: `$ git-sha --short-sha`
- To update the package.json file with the current, short SHA: `$ git-sha --npm`

*Note, to use the CLI you will need to install git-sha-util globally*

### JS

```JS
const sha = require('git-sha-util');

// Log out the current SHA
sha.sha().then(sha => console.log(sha));

// Log out the current, short SHA
sha.shaShort().then(sha => console.log(sha));

// Update the package.json file with the current, short SHA
sha.npm();

```
