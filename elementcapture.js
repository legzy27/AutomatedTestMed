var fs = require('fs')

describe('Medicines.org.uk App', function() {

    it('Take screenshot of logo', function() {
 
      browser.ignoreSynchronization = true;
      browser.get('https://www.medicines.org.uk/emc/browse-companies');
      browser.sleep(3000);

     var logo = element(by.xpath('/html/body/nav/div/div[1]/a/img'))

     logo.takeScreenshot().then(function(element){
        var stream = fs.createWriteStream('./tmp/element.png');
        stream.write(new Buffer(element, 'base64'));
        stream.end();
  
    })

    browser.sleep(5000)

})

    })



