var data = require('./jsonfiles/contactinfo.json')



// Read company contact information from JSON File and output data
// import the json file contactinfo.json in readcompanydetails file and read the json data
describe("Read JSON file", function(){
    
    it('Take screenshot of logo', function(){

      console.log(data.url);
      console.log(data.Address);
      console.log(data.Fax);
      console.log(data.Telephone);
      console.log(data.MedicalInformationemail);
      console.log(data.OutofHoursTelephone);

});


});