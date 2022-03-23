const xlsx = require('xlsx');
const path = require('path');

const exportExcel = (data,columns,names,filePath) => {

      const sheet = xlsx.utils.book_new();
      const workSheet = [

          columns,
          ...data
      ];

      const work = xlsx.utils.aoa_to_sheet(workSheet);
      xlsx.utils.book_append_sheet(sheet,work,names);
      xlsx.writeFile(sheet,path.resolve(filePath))
}

const exportData = (data,workSheetColumnsNames,workSheetName,filePath) => {

    const raw = data.map(item => {

          return [item.id,item.label,item.ptvAddr,item.lat,item.lng,[item.type]];
    })

    exportExcel(raw,workSheetColumnsNames,workSheetName,filePath)
    
}

module.exports = exportData;