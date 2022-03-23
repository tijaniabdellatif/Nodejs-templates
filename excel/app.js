const exportUsers = require('./export');
const data = [

    {
        id:0,
        name:'tijani',
        age:33,
        height:300
    },

    {
        id:1,
        name:'doji',
        age:30,
        height:3000
    }
]

const workSheetColumnNames = [

      "ID",
      "NAME",
      "AGE",
      "HEIGHT"
]

const workSheetName = 'Users';
const filePath = './outputs/third.xlsx';

exportUsers(data,workSheetColumnNames,workSheetName,filePath);