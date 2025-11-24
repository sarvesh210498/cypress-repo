const { merge } = require("mochawesome-merge");
const generate = require("mochawesome-report-generator");

(async () => {
  const report = await merge({
    files: ["cypress/results/mochawesome/*.json"]
  });

  await generate.create(report, {
    reportDir: "cypress/results/mochawesome"
  });
})();