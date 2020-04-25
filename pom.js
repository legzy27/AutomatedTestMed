//Page Object Model File

var med = function() {

var  clickCom = element(by.partialLinkText("A. Menarini Farmaceutica Internazionale SRL"));

    this.get = function() {
        browser.get('https://www.medicines.org.uk/emc/browse-companies');

};
    this.comName = function() {
    clickCom.click();
  
 }

  


}


module.exports = new med();