var data = require('./jsonfiles/global.json')

describe("Read JSON file", function(){
    
    it('Take screenshot of logo', function(){

      console.log(data.url);
      console.log(data.Address);
      console.log(data.Fax);
      console.log(data.Telephone);
      console.log(data.MedicalInformationemail);
      console.log(data.OutofHoursTelephone);

})


})