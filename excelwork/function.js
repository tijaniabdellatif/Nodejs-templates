const fs = require('fs');
const xlsx = require('xlsx');
const chalk = require("chalk");


const loadData = (pathJson) => {
    try{
            const buffer = fs.readFileSync(pathJson);
            const dataJson = buffer.toString();
            return JSON.parse(dataJson)
    }
    catch(e){

        console.log(chalk.yellow('Warning !!'));
        console.log(chalk.black.bgRed.bold('no data provided for now'));
        return [];

    }
}
const readFile = (path,sheet) => {

    try{
        const workBook = xlsx.readFile(path,{dateNF:'mm/dd/yyyy'});
        const workSheet = workBook.Sheets[sheet];
        const data =  xlsx.utils.sheet_to_json(workSheet,{raw:false});
        return data;
    }

    catch(e){

        console.log(chalk.yellow('Warning !!'));
        console.log(chalk.black.bgRed.bold('no data provided for now'));
        return [];
    }
   

}


const ParseFile = (JsonPath,data,Sheetname,workbook,ExcelPath) => {

    try {
        fs.writeFileSync(JsonPath,JSON.stringify(data,null,2));
        let content = JSON.parse(fs.readFileSync(JsonPath,'utf-8'));
        let newWorkSheet = xlsx.utils.json_to_sheet(content);
        xlsx.utils.book_append_sheet(workbook,newWorkSheet,Sheetname);
        xlsx.writeFile(workbook,ExcelPath);
    }
    catch(e){

        console.log(chalk.yellow('Warning !!'));
        console.log(chalk.black.bgRed.bold('something is wrong'));
        return false;
    }

}

const readXlsxFile = (filename , sheetname) =>{
    try{

        if(filename == undefined || typeof(filename) != "string"){
           throw new Error("filename must be a string. Value received: "+filename);
        }
        let file = xlsx.readFile(filename)
        let data = []
        
        
        let firstSheet = ""
       

        
        let fsheets = file.Sheets[sheetname]
        if(fsheets == undefined){
            let cpt = 0 ;
            for(key in file.Sheets){
                if(cpt > 1)
                 break ;
                firstSheet = key ;
                cpt ++
            }

            fsheets = firstSheet
        }

        
        if(fsheets != undefined){
            const temp = xlsx.utils.sheet_to_json(fsheets)
            temp.forEach((res) => {
                data.push(res)
            })
        }
        return {success: true , response: data}
    }
    catch(e){
       console.log('Error reading file:',e.message)

       return {success: false , response: e.message}
    }
    
}

const writeXlsxFile = (data , filename , sheetname = 'sheet1') =>{
    try{
        console.log('start writing file....')
        const file = xlsx.readFile(filename)
        //console.log('file.Sheets',Object.keys(file.Sheets) )
        const ws = xlsx.utils.json_to_sheet(data)
        if(file.Sheets[sheetname] !== undefined)
           file.Sheets[sheetname] =  trim_cells(ws);
        else
           xlsx.utils.book_append_sheet(file,ws,sheetname)
    
        xlsx.writeFile( file ,filename)
        console.log('finish writing file....')
        return {success: true , response: 'Write successfuly'}
    }catch(e){
         return { sucess: false , response: e.message}
    }
    

}

function trim_cells(ws) {
    var range = xlsx.utils.decode_range(ws["!ref"]);
      for (var R = range.s.r; R <= range.e.r; ++R) {
        for (var C = range.s.c; C <= range.e.c; ++C) {
          var coord = xlsx.utils.encode_cell({ r: R, c: C }),
            cell = ws[coord];
          if (!cell || !cell.v) continue;
          // clean up raw value of string cells
          if (cell.t == "s") cell.v = cell.v.trim();
          // clean up formatted text
          if (cell.w) cell.w = cell.w.trim();
        }
      }
    
    
    
}


function calcuteDistance(ptA ,ptB) {
    var radius = 6371; 
    var dLat = deg2rad(ptB.lat-ptA.lat);  
    var dLon = deg2rad(ptB.lng-ptA.lng); 
    var res1 = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(ptA.lat)) * Math.cos(deg2rad(ptB.lat)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 

    var res2 = 2 * Math.atan2(Math.sqrt(res1), Math.sqrt(1-res1)); 
    var distance = radius* res2; 
    return distance;
  }
  
  // degré to radian
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }


module.exports = {

    readFile,
    ParseFile,
    loadData,
    readXlsxFile,
    writeXlsxFile,
    calcuteDistance,
  
}