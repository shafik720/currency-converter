
let droplist = document.querySelectorAll('.selection-div select');

for(let i=0; i<droplist.length; i++){
    for(currencyCode in country_list){
        let optionTag = `<option value="${currencyCode}">${currencyCode}</option>`;
        droplist[i].insertAdjacentHTML('beforeend',optionTag);
    }
}
