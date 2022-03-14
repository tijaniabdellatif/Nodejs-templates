setTimeout(() => {

    console.log('Two seconds are up')

},2000);

const names = ['Tijani','Ami','Karim'];
const shortNames = names.filter(single => {

    return single.length <= 4;
})