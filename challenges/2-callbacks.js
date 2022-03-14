setTimeout(() => {

    console.log('Two seconds are up')

},2000);

const names = ['Tijani','Ami','Karim'];
const shortNames = names.filter(single => {

    return single.length <= 4;
})

const geoCode = (address,callback) => {

    // const data = {

    //     lat:'4334',
    //     long:'56.5'
    // }

    // return data;

    setTimeout(() => {
        const data = {
            lat:'4334',
            long:'56.5'
        }
        // return data;
        callback(data);
    },2000)

}

// const data = geoCode('Rabat');
// console.log(data);

geoCode('Rabat',(data) => {
    console.log(data);
});