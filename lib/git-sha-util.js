'use strict';

const Promise = require('bluebird');
const exec = Promise.promisify(require('child_process').exec);
const fs = Promise.promisifyAll(require("fs"));
const path = require('path');
const os = require('os');

module.exports = class Git {

  static sha() {
    const options = (os.type() === 'Windows_NT') ? { shell: 'cmd.exe' } : {};
    return exec('git rev-parse HEAD', options);
  }

  static shaShort() {
    return this.sha().then( sha => sha.substring(0,7));
  }

  static npm() {
    return this.shaShort().then( sha => {
      const filePath = path.resolve(path.dirname(require.main.filename), 'package.json');
      return fs.readFileAsync(filePath).then(data => {
        const packJSON = JSON.parse(data)
        packJSON.sha = sha;
        return packJSON;
      })
      .then( data => fs.writeFileAsync(filePath, JSON.stringify(data, null, 2)));
    });
  }

};
