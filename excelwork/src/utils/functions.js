const fs = require('fs');
const xlsx = require('xlsx');

const generateExcelFromJson = (jsonFP,excelFP,sheetName) => {


     let content = JSON.parse(fs.readdirSync(jsonFP,'utf-8'));
     let wb = xlsx.utils.book_new();
     let ws = xlsx.utils.json_to_sheet(content);
     xlsx.utils.book_append_sheet(wb,ws,sheetName);
     xlsx.writeFile(wb,excelFP);
}