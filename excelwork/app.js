const xlsx = require('xlsx');
const {readFile,ParseFile,loadData} = require('./function'); 
const workBook = xlsx.readFile('./docs/newStudents.xlsx',{dateNF:'dd/mm/yyyy'}); 
const kaizenModule = require('./kaizen');
const data = readFile('./docs/newStudents.xlsx','orderImport');

kaizenModule.generate_ref_file();

let delivery=  [] , pickup = [];
data.forEach(item => {
   if(item.type=='pickup') pickup.push(item);
   if(item.type=='delivery') delivery.push(item);
   if(item.type == 'pickup-delivery'){
    pickup.push({
      ...item,
      type :'pickup'
    });
    delivery.push({
      ...item,
      type :'delivery'
    });
   }

});


if(data.length > 0){

  ParseFile('./docs/delivery.json',delivery,'delivery',workBook,'./docs/newStudents.xlsx')
  ParseFile('./docs/onlyPickup.json',pickup,'pickup',workBook,'./docs/newStudents.xlsx')

}
else {

  loadData('./docs/delivery.json');
  
}


