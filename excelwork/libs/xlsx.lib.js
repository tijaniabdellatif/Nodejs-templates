
const xlsx = require('xlsx')

exports.readXlsxFile = (filename , sheetname) =>{
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

exports.writeXlsxFile = (data , filename , sheetname = 'sheet1') =>{
    try{
        console.log('start writing file....')
        const file = xlsx.readFile(filename)
        //console.log('file.Sheets',Object.keys(file.Sheets) )
        const ws = xlsx.utils.json_to_sheet(data)
        if(file.Sheets[sheetname] !== undefined)
           file.Sheets[sheetname] = ws
        else
           xlsx.utils.book_append_sheet(file,ws,sheetname)
    
        xlsx.writeFile( file ,filename)
        console.log('finish writing file....')
        return {success: true , response: 'Write successfuly'}
    }catch(e){
         return { sucess: false , response: e.message}
    }
    

}