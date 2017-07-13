'use strict';

module.exports = config => {
  config.set({
    files: ['../src/index.js', '../test/fatture-in-cloud.spec.js'],
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    reporters: ['spec']
  });
};