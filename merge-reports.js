const { merge } = require('mochawesome-merge');
const generate = require('mochawesome-report-generator');

merge({ files: ['./cypress/results/mochawesome/*.json'] })
  .then(report => generate.create(report));
