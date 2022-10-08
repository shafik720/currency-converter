
let droplist = document.querySelector('.selection-div select');

for(let i=0; i<droplist.length; i++){
    for(currencyCode in country_list){
        console.log(currencyCode);
    }
}