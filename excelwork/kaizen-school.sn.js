let xlsxLib = require('../libs/xlsx.lib');
let fs = require('fs');



let joinTable = []

let students = []

let ref_data = {
    CreationDate: '',
    CreatedBy: '',
    ImportAction: '',
    ImportType: '',
    ImportVersion: '',
    ExtId1: '',
    ExtId2: '',
    CustomerOrderExtId: '',
    OrderAction: '',
    Note: '',
    Assortment: '',
    Customer: '',
    Contract: '',
    Taskfield1ExtId: '',
    Taskfield2ExtId: '',
    Taskfield3ExtId: '',
    PrecombinedTourId: '',
    PrecombinedTourFix: '',
    VehicleRequirements: '',
    LogisticId: '',
    TourPos: '',
    Solo: '',
    Priority: '',
    AlternativeDepots: '',
    PreassignedTruck: '',
    Weight: '',
    Volume: '',
    LoadingMeter: '',
    Length: '',
    Width: '',
    Height: '',
    MeansOfTransportType1: '',
    MeansOfTransportCount1: '',
    MeansOfTransportType2: '',
    MeansOfTransportCount2: '',
    MeansOfTransportType3: '',
    MeansOfTransportCount3: '',
    Quantity1: '',
    Quantity2: '',
    Quantity3: '',
    Quantity4: '',
    Quantity5: '',
    Quantity6: '',
    Quantity7: '',
    EarliestDateTime: '',
    LatestDateTime: '',
    EarliestPickupTime: '',
    LatestPickupTime: '',
    EarliestDeliveryTime: '',
    LatestDeliveryTime: '',
    MaxTransportPeriod: '',
    PickupLocationID: '',
    PickupIsDepot: '',
    PickupLocationName: '',
    PickupCountry: '',
    PickupFederalState: '',
    PickupPostCode: '',
    PickupCity: '',
    PickupDistrict: '',
    PickupStreet: '',
    PickupHouseNo: '',
    PickupCoordFormat: '',
    PickupLongitude: '',
    PickupLatitude: '',
    PickupPrecombinedTourSequence: '',
    PickupOpeningHour1Start: '',
    PickupOpeningHour1End: '',
    PickupOpeningHour1Days: '',
    PickupOpeningHour2Start: '',
    PickupOpeningHour2End: '',
    PickupOpeningHour2Days: '',
    PickupOpeningHour3Start: '',
    PickupOpeningHour3End: '',
    PickupOpeningHour3Days: '',
    PickupOpeningHour4Start: '',
    PickupOpeningHour4End: '',
    PickupOpeningHour4Days: '',
    PickupOpeningHour5Start: '',
    PickupOpeningHour5End: '',
    PickupOpeningHour5Days: '',
    PickupServicePeriodExternal: '',
    PickupServiceTimeClass: '',
    PickupAdditionalSitePeriod: '',
    PickupOneTimeLocation: '',
    PickupCustomerGroup: '',
    PickupCustomerIndicator: '',
    PickupSite: '',
    PickupNote: '',
    PickupDepotFix: '',
    PickupResourceGroupMin: '',
    PickupResourceGroupMax: '',
    PickupResourceGroupAdd: '',
    PickupVehicleRequirements: '',
    PickupNoTrailer: '',
    PickupOpeningHoursToleranceClass: '',
    PickupServiceInInterval: '',
    DeliveryLocationID: '',
    DeliveryIsDepot: '',
    DeliveryLocationName: '',
    DeliveryCountry: '',
    DeliveryFederalState: '',
    DeliveryPostCode: '',
    DeliveryCity: '',
    DeliveryDistrict: '',
    DeliveryStreet: '',
    DeliveryHouseNo: '',
    DeliveryCoordFormat: '',
    DeliveryLongitude: '',
    DeliveryLatitude: '',
    DeliveryPrecombinedTourSequence: '',
    DeliveryOpeningHour1Start: '',
    DeliveryOpeningHour1End: '',
    DeliveryOpeningHour1Days: '',
    DeliveryOpeningHour2Start: '',
    DeliveryOpeningHour2End: '',
    DeliveryOpeningHour2Days: '',
    DeliveryOpeningHour3Start: '',
    DeliveryOpeningHour3End: '',
    DeliveryOpeningHour3Days: '',
    DeliveryOpeningHour4Start: '',
    DeliveryOpeningHour4End: '',
    DeliveryOpeningHour4Days: '',
    DeliveryOpeningHour5Start: '',
    DeliveryOpeningHour5End: '',
    DeliveryOpeningHour5Days: '',
    DeliveryServicePeriodExternal: '',
    DeliveryServiceTimeClass: '',
    DeliveryAdditionalSitePeriod: '',
    DeliveryOneTimeLocation: '',
    DeliveryCustomerGroup: '',
    DeliveryCustomerIndicator: '',
    DeliverySite: '',
    DeliveryNote: '',
    DeliveryDepotFix: '',
    DeliveryResourceGroupMin: '',
    DeliveryResourceGroupMax: '',
    DeliveryResourceGroupAdd: '',
    DeliveryVehicleRequirements: '',
    DeliveryNoTrailer: '',
    DeliveryOpeningHoursToleranceClass: '',
    DeliveryServiceInInterval: '',
    CoDriverNeeded: '',
    Num_1: '',
    Num_2: '',
    Num_3: '',
    Num_4: '',
    Num_5: '',
    Num_6: '',
    Num_7: '',
    Num_8: '',
    Num_9: '',
    Num_10: '',
    Text_1: '',
    Text_2: '',
    Text_3: '',
    Text_4: '',
    Text_5: '',
    Text_6: '',
    Text_7: '',
    Text_8: '',
    Text_9: '',
    Text_10: ''
  }

exports.generate_ref_file = ()=> {
    init() ;
    //console.log('ref_data:', ref_data)
    if(students instanceof Array) {
        let outData = []
        console.log("len:", students.length)
        let $cpt = 0
        students.forEach( st => {
            if(st.type == 'Aller-Reto'){
               $cpt++
               st.type = "Aller"
               students.push({...st, type: "Retour"})
            }
        })
        console.log(students.length , $cpt)
        let pickupDatas = students.filter( _dt => _dt.type == "Aller")
        let deliveryData = students.filter( _dt => _dt.type == "Retour")
        let pickupData_ref = []
        let deliveryData_ref = []
        
        pickupDatas.forEach( pk => {
            let $data = {
                CreationDate:'27/12/2021 00:00:00' ,                     
                ImportType: 'OrderImport',
                ImportAction:'create',
                ExtId1: pk.code, 
                CustomerOrderExtId: pk.code, 
                OrderAction: 'pickup',
                EarliestDateTime:  '27/12/2021 05:00',
                LatestDateTime: '27/12/2021 07:30',
                EarliestPickupTime: '27/12/2021 05:00',
                LatestPickupTime:  '27/12/2021 07:30',
                EarliestDeliveryTime: '27/12/2021 06:30',
                LatestDeliveryTime: '27/12/2021 07:30',
                PickupLocationID: pk.code,
                PickupLocationName: pk.label ,
                PickupIsDepot: 0,
                DeliveryServicePeriodExternal: 120,
                PickupLongitude: pk.lng.replace(',', '.') ,
                PickupLatitude: pk.lat.replace(',', '.') ,
                Taskfield1ExtId: "Standard",
                PickupCountry: "MAR"  ,
                DeliveryLocationID: "kaizen_school",
                DeliveryLocationName: "kaizen_school" ,
                DeliveryIsDepot: 1 ,
                DeliveryCountry: "MAR"  ,
                DeliveryOpeningHour1Start: "07:30",
                DeliveryOpeningHour1End: "20:00",
                DeliveryOpeningHour1Days: "1,2,3,4,5",
                Quantity1: 1 ,
                Weight: 1,
                PrecombinedTourFix: 0,
                PickupCoordFormat: "GEODEC",
                PrecombinedTourId: pk.driver
            }

            pickupData_ref.push({...ref_data , ...$data})

        }) 
        deliveryData.forEach( pk => {
            let $data = {
                CreationDate:'27/12/2021 00:00:00' ,                     
                ImportType: 'OrderImport',
                ImportAction:'create',
                ExtId1: pk.code, 
                CustomerOrderExtId: pk.code, 
                OrderAction: "delivery",
                EarliestDateTime:  '27/12/2021 16:30',
                LatestDateTime: '27/12/2021 20:00',
                EarliestPickupTime: '27/12/2021 16:30',
                LatestPickupTime:  '27/12/2021 19:00',
                EarliestDeliveryTime: '27/12/2021 16:45',
                LatestDeliveryTime: '27/12/2021 20:00',
                PickupLocationID: "kaizen_school",
                PickupLocationName:  "kaizen_school",
                PickupIsDepot: 1,
                PickupOpeningHour1Start: "07:30",
                PickupOpeningHour1End: "20:00",
                PickupOpeningHour1Days: "1,2,3,4,5",
                Taskfield1ExtId: "Standard",
                PickupCountry: "MAR"  ,
                DeliveryLocationID:  pk.code,
                DeliveryLocationName:  pk.label,
                DeliveryLongitude: pk.lng.replace(',', '.') ,
                DeliveryLatitude: pk.lat.replace(',', '.') ,
                DeliveryIsDepot: 0 ,
                DeliveryCountry: "MAR"  ,
                DeliveryServicePeriodExternal: 120,
                Quantity1: 1 ,
                Weight: 1,
                PrecombinedTourFix: 0,
                DeliveryCoordFormat: "GEODEC",
                PrecombinedTourId: pk.driver
            }

            deliveryData_ref.push({...ref_data , ...$data})

        }) 


            
        xlsxLib.writeXlsxFile(pickupData_ref , 'storage/files/kaizen-students.xlsx' , "pickup_kaizen")
        xlsxLib.writeXlsxFile(deliveryData_ref , 'storage/files/kaizen-students.xlsx' , "delivery_kaizen")


    }
}


function init(){
   // getJointTable() ;
    getStudents() 
   // getReferenceAttr()

}

function getJointTable(){
    joinTable = xlsxLib.readXlsxFile("storage/files/kaizen-students.xlsx", "coords").response

}

function getStudents(){
    students = xlsxLib.readXlsxFile("storage/files/kaizen-students.xlsx", "students-list").response
}

function getJoinData(refColumn , key = 'code'){
    if(refColumn == undefined)
      return {};
    
    let data = joinTable.find( _data => _data[key] === refColumn);
    
    return data || {} 
}


function getReferenceAttr(){
    let data = xlsxLib.readXlsxFile('storage/files/OrderImport_ReferenceDataTest.xlsx' , 'OrderImport').response
    
    let attrRes = {}
    if(data && data.length > 0){
        attrRes = data[0]
        let keys = Object.keys(attrRes);
        keys.forEach( key => attrRes[key] = '')
    }
    ref_data = attrRes
    return attrRes
}


exports.kaizen_result = ()=>{
    let datas = [
    
    ]
    let dt = xlsxLib.readXlsxFile("storage/files/tours.xlsx", "tours")
    let students = xlsxLib.readXlsxFile("storage/files/tours.xlsx", "students-2").response


    console.log('dtt:', dt.response[0])
    console.log('std:', students[2])

    dt.response.forEach( (item, index) => {
        delete item.num
        item.arrival_time = item.arrival_time.substr(-8, 5)
        item.departure_time = item.departure_time.substr(-8, 5)
        item.driving_periode = item.driving_periode.substr(0, 5)
        item.service_periode = item.service_periode.substr(0, 5) 
        item.id = index + 1 ;
        let std = students.find( _st => _st.label == item.label)

        if(std){
            item.code = std.code
            item.address = std.address
            item.level = std.level
            item.level.phone = /06/.test(std.code)
            let phone = /06/.test(std.region) ? std.region : ""
            phone = phone.split('/')
            item.phone1 = phone[0];
            item.phone2 = phone.length > 1 ? phone[0] : ""
        }
    })

    console.log('dtt:', dt.response[70])
    let adil = dt.response.filter( _dt => _dt.driver == 'Adil')
    let musta = dt.response.filter( _dt => _dt.driver == 'Mustapha')
    let redou = dt.response.filter( _dt => _dt.driver == 'Redouane')
    let hassa = dt.response.filter( _dt => _dt.driver == 'Hassane')
    let nour = dt.response.filter( _dt => _dt.driver == 'Nourddine')
    let faiz = dt.response.filter( _dt => _dt.driver == 'Faiz')


    let data1 = {
        planID: "3259",
        orders_count: 20,
        driver_name: "Adil",
        driver_id: 1 ,
        start_time: "16:30",
        end_time: "17:38",
        distance: "29.517",
        time: "1 h 08 min",
        driving_time: "48 min",
        chain: adil
    }

    let data2 = {
        planID: "3260",
        orders_count: 28,
        start_time: "16:30",
        driver_name: "Mustapha",
        driver_id: 38 ,
        end_time: "17:38",
        distance: "22.255",
        time: "1 h 08 min",
        driving_time: "40 min",
        chain: musta
    }

    let data3 = {
        planID: "3261",
        orders_count: 28,
        start_time: "16:30",
        driver_name: "Redouane",
        driver_id: 40 ,
        end_time: "17:34",
        distance: "20.889",
        time: "1 h 04 min",
        driving_time: "36 min",
        chain: redou
    }

    let data4 = {
        planID: "3262",
        orders_count: 25,
        driver_name: "Hassane",
        driver_id: 41 ,
        start_time: "16:30",
        end_time: "17:39",
        distance: "23.931",
        time: "1 h 09 min",
        driving_time: "44 min",
        chain: hassa
    }

    let data5 = {
        planID: "3263",
        orders_count: 23,
        driver_name: "Nourddine",
        driver_id: 39 ,
        start_time: "16:30",
        end_time: "17:34",
        distance: "22.117",
        time: "1 h 04 min",
        driving_time: "41 min",
        chain: nour
    }

    let data6 = {
        planID: "3264",
        orders_count: 26,
        driver_name: "Faiz",
        driver_id: 42 ,
        start_time: "16:30",
        end_time: "17:31",
        distance: "18.773",
        time: "1 h 01 min",
        driving_time: "35 min",
        chain: faiz
    }



    datas.push(data1)
    datas.push(data2)
    datas.push(data3)
    datas.push(data4)
    datas.push(data5)
    datas.push(data6)



    fs.writeFile('storage/results/tours.json', JSON.stringify(datas),'utf-8', function(err){
      console.log('err:', err)
    }) 
}


exports.kaizenNew = ()=>{
    let dt = xlsxLib.readXlsxFile("storage/files/delivery_scenario.new.xlsx", "Feuil3").response
    let students = xlsxLib.readXlsxFile("storage/files/delivery_scenario.new.xlsx", "students-drivers").response


    console.log('dtt:', dt.length)
    console.log('std:', students.length)
    
    let isNon = []
    dt.forEach( (item, index) => {
        
        let std = students.find( _st => _st.label.trim().toUpperCase() == item.label.trim().toUpperCase())
        item.driver1 = std !== undefined ? std.driver :  ""
        item.index = std !== undefined ? std.index :  ""
        if(std == undefined){
            isNon.push(item)
        }
        
    })

    //xlsxLib.writeXlsxFile(dt,"storage/files/delivery_scenario.new.xlsx", "new list")

    console.log('isNO:',isNon)
    console.log('isNO:',isNon.length)
    console.log('std:', dt[100])
}