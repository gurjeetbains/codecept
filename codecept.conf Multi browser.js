const {
  setHeadlessWhen
} = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      // url: 'https://myapp.com',
      "multiremote": {
        "MyChrome": {
          "desiredCapabilities": {
            "browserName": "chrome"
          }
        },
        "MyFirefox": {
          "desiredCapabilities": {
            "browserName": "firefox"
          }
        }
      },
      // restart: false,
      // windowSize: 'maximize',
      // desiredCapabilities: {
      //   chromeOptions: {
      //     args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox"]
      //   }
      // }
    },
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjsdemo',
  plugins: {
    selenoid: {
      enabled: false,
      deletePassed: true,
      autoCreate: true,
      autoStart: true,
      sessionTimeout: '30m',
      enableVideo: true,
      enableLog: true,
    },
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport: true
    },
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true,
      uniqueScreenshotNames: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  }
}