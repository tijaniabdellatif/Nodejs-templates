const xlsx = require('xlsx');
const fs = require('fs');


//Read file
// const workBook = xlsx.readFile("./docs/students.xlsx",{cellDates:true});
const workBook = xlsx.readFile("./docs/students.xlsx",{dateNF:'mm/dd/yyyy'});
const workSheet = workBook.Sheets['OrderImport'];
const data =  xlsx.utils.sheet_to_json(workSheet,{raw:false});
const deliveryData = data.filter(item => item.type === "delivery" );
fs.writeFileSync('./docs/delivery.json',JSON.stringify(deliveryData,null,2));
let content = JSON.parse(fs.readFileSync('./docs/delivery.json','utf-8'));
let newWorkbook = xlsx.utils.book_new();
let newWorksheet = xlsx.utils.json_to_sheet(content);
xlsx.utils.book_append_sheet(newWorkbook,newWorksheet,'delivery');
xlsx.writeFile(newWorkbook,'./docs/delivery.xlsx');













// const xlsx = require('xlsx');
// const file = xlsx.readFile('./docs/students.xlsx',{cellDates:true});
// console.log(file.SheetNames)
// const sheets = file.Sheets['Feuille 1'];
// const data = xlsx.utils.sheet_to_json(sheets);
// const exportData = require('./export');



// const deliveryAlone = data.filter(item =>  item.type === 'delivery');
// const deliveryAndPick = data.filter(item => item.type === 'pickup');

// const rawData = data.filter(item => item.type === 'pickup-delivery').slice(0,4);

// const main = rawData.map(element => {

//       return  element.type.split('-');
     
// }).join(',').substring(0,15).split(',')

// console.log(main)


// const Name1= 'A'

// const filePath1 = './docs/A.xlsx'
// const filePath2 = './docs/AC.xlsx'

// exportData(deliveryAlone,names,Name1,filePath1)
// exportData(deliveryAndPick,names,Name2,filePath2)