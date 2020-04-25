


exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['elementcapture.js', 'spec.js','readcompanydetails.js'],
    framework: 'jasmine',
    getPageTimeout: 30000,
    allScriptsTimeout: 30000,




  onPrepare: () => {
    // set browser size...
     browser.manage().window().setSize(1600, 1000);
   

    // better jasmine 2 reports...
    const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

    jasmine.getEnv().addReporter(new SpecReporter());

    
},


capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 2,
    chromeOptions: {
        args: [
            // disable chrome's wakiness
            '--disable-infobars',
            '--disable-extensions',
            'verbose',
            'log-path=/tmp/chromedriver.log'
        ],
        prefs: {
            // disable chrome's annoying password manager
            'profile.password_manager_enabled': false,
            'credentials_enable_service': false,
            'password_manager_enabled': false
        }
    }
},

jasmineNodeOpts: {
    showColors: true,
    displaySpecDuration: true,
    // overrides jasmine's print method to report dot syntax for custom reports
    print: () => {},
    defaultTimeoutInterval: 50000
},

}