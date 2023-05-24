# Example: executing async tasks before each spec

Executing an async task for each Cypress spec file

[before](https://github.com/currents-dev/example-setup-before/blob/8342af5dcb02ebb72a2c4312c015d869aed7ea71/cypress/support/e2e.js#L23) method of `cypress/support/e2e.js` is automatically included in each spec file. The method invokes an async [`cy.task`](https://docs.cypress.io/api/commands/task) that runs in NodeJS, and can be used to spin up a testing environment, or execute any other setup task e.g. seeding a DB.

Take a look at `cypress.config.js` that defines the setup task within `setupNodeEvents` function.
