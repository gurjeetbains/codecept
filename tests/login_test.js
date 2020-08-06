Feature('My First Test');

Scenario('test something', (I, test_pagePage) => {
  I.amOnPage('https://github.com');
  I.see('GitHub');
  I.see(test_pagePage.fields.email)
});