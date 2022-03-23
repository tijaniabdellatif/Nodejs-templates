const excel = require('xlsx');
const path = require('path');
const exportExcel = (data,workSheetColumnNames,workSheetName,filePath) => {
    const sheet = excel.utils.book_new();
    const workSheet = [

        workSheetColumnNames,
        ...data
    ];
    const work = excel.utils.aoa_to_sheet(workSheet);
    excel.utils.book_append_sheet(sheet,work,workSheetName);
    excel.writeFile(sheet,path.resolve(filePath));
}

const exportUsers = (users,workSheetColumnNames,workSheetName,filePath) => {
    const data = users.map(user => {
          return [user.id,user.name,user.age,user.height];
    })
    exportExcel(data,workSheetColumnNames,workSheetName,filePath)
}
module.exports = exportUsers;