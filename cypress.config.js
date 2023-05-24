const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        setupEnv() {
          return new Promise((resolve) => {
            console.log("setupEnv started");

            setTimeout(() => {
              console.log("setupEnv done");
              resolve(null);
            }, 3000);
          });
        },
      });
    },
  },
});
