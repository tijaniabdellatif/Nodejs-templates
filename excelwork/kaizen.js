const {readFile,writeXlsxFile,calcuteDistance} = require('./function'); 

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
  //  init() ;
   
    if(true) {
    
        let pickupDatas = readFile('./docs/newStudents.xlsx','pickup')
        let deliveryData = readFile('./docs/newStudents.xlsx','delivery')
        let pickupData_ref = []
        let deliveryData_ref = []
        
        pickupDatas.forEach( pk => {
            const position = calcuteDistance({lat:pk.lat,lng:pk.lng},{lat:33.59612707943883,lng:-7.53459368853688})
            if(position > 3){

                pk.TourPos = 2;
            }

            else {

                pk.TourPos = 0;
            }
            
            let $data = {
                CreationDate:'27/12/2021 00:00:00' ,                     
                ImportType: 'OrderImport',
                ImportAction:'create',
                ExtId1: pk.label, 
                CustomerOrderExtId: pk.label, 
                OrderAction: 'pickup',
                EarliestDateTime:  '24/03/2022 05:00:00',
                LatestDateTime: '24/03/2022 07:30:00',
                EarliestPickupTime: '24/03/2022 05:00:00',
                LatestPickupTime:  '24/03/2022 07:30:00',
                EarliestDeliveryTime: '24/03/2022 06:30:00',
                LatestDeliveryTime: '24/03/2022 07:30:00',
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
                DeliveryOpeningHour1Start: "07:30:00",
                DeliveryOpeningHour1End: "20:00:00",
                DeliveryOpeningHour1Days: "1,2,3,4,5",
                Quantity1: 1 ,
                Weight: 1,
                PrecombinedTourFix: 0,
                PickupCoordFormat: "GEODEC",
                PrecombinedTourId: pk.driver,
                TourPos:pk.TourPos,
               
            }

            
           
            pickupData_ref.push({...ref_data , ...$data})

        }) 
        deliveryData.forEach( pk => {

            const position = calcuteDistance({lat:pk.lat,lng:pk.lng},{lat:33.59612707943883,lng:-7.53459368853688})
            if(position > 3){

                pk.TourPos = 2;
            }

            else {

                pk.TourPos = 0;
            }

            let $data = {
                CreationDate:'24/03/2022 00:00:00' ,                     
                ImportType: 'OrderImport',
                ImportAction:'create',
                ExtId1: pk.label, 
                CustomerOrderExtId: pk.label, 
                OrderAction: "delivery",
                EarliestDateTime:  '24/03/2022 16:30:00',
                LatestDateTime: '24/03/2022 20:00:00',
                EarliestPickupTime: '24/03/2022 16:30:00',
                LatestPickupTime:  '24/03/2022 19:00:00',
                EarliestDeliveryTime: '24/03/2022 16:45:00',
                LatestDeliveryTime: '24/03/2022 20:00:00',
                PickupLocationID: "kaizen_school",
                PickupLocationName:  "kaizen_school",
                PickupIsDepot: 1,
                PickupOpeningHour1Start: "07:30:00",
                PickupOpeningHour1End: "20:00:00",
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
                PrecombinedTourId: pk.driver || '',
                TourPos:pk.TourPos,
              
            }


           
            deliveryData_ref.push({...ref_data , ...$data})

            
        }) 

        // console.log(deliveryData_ref);
        // return;
        writeXlsxFile(pickupData_ref,'./docs/newStudents.xlsx','pickupresult');
        writeXlsxFile(deliveryData_ref,'./docs/newStudents.xlsx','deliveryresult');

    }
}


// function init(){
//    // getJointTable() ;
//     getStudents() 
//    // getReferenceAttr()

// }

