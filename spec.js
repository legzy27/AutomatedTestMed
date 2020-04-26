var  med = require('./pom.js');

describe('Medicines.org.uk App', function() {
  beforeEach( async function() {
    browser.ignoreSynchronization = true;
    med.get();
    browser.manage().timeouts().implicitlyWait(2 * 50000);

  });

  it('Capture details of first company', function() {
    browser.manage().timeouts().implicitlyWait(2 * 50000);
    med.comName();
    browser.sleep(5000);
    var EC = protractor.ExpectedConditions;
    // Waits for the element image to be visible 
    browser.wait(EC.visibilityOf($('img[alt="Company image"]')),5000);
   // Gets title of the page
   browser.getTitle().then(function(title){
    console.log("Web page title is : " + title );
   });
  // Capture contact details 
     var text = element(by.className('gfdCompanyDetailsTitle'));
     expect(text.getText()).toMatch('Address');  
     browser.navigate().back();
  
   
  });

  it('Capture details of Third company', function() {
    browser.manage().timeouts().implicitlyWait(2 * 30000);
    element(by.partialLinkText("Accord Healthcare Limited")).click();
    browser.sleep(5000);
    var EC = protractor.ExpectedConditions;
    // Waits for the element image to be visible 
    browser.wait(EC.visibilityOf($('img[alt="Company image"]')),5000);
   // Gets title of the page
   browser.getTitle().then(function(title){
    console.log("Web page title is : " + title );
   });
  // Capture contact details 
    expect(element.all(by.className("gfdCompanyDetailsTitle")).isPresent()).toBe(true);
      browser.navigate().back();
  });

  it('Capture details of Last company', function() {
    browser.manage().timeouts().implicitlyWait(2 * 30000);
    element(by.partialLinkText("Aurobindo Pharma - Milpharm Ltd.")).click();
    browser.sleep(5000);
    var EC = protractor.ExpectedConditions;
    // Waits for the image to be visible 
    browser.wait(EC.visibilityOf($('img[alt="Company image"]')),5000);
   // Gets title of the page
   browser.getTitle().then(function(title){
    console.log("Web page title is : " + title );
   });
  // Capture contact details of the third company
     expect(element.all(by.className("gfdCompanyDetailsTitle")).isPresent()).toBe(true);
      browser.navigate().back();


  })

})