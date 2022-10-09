
let droplist = document.querySelectorAll('.selection-div select');

for(let i=0; i<droplist.length; i++){
    let selected;
    for(currencyCode in country_list){
        if(i==0){
            selected = currencyCode == 'USD' ? 'selected' : '';
        }else if(i==1){
            selected = currencyCode == 'BDT' ? 'selected' :  '';
        }
        let optionTag = `<option value="${currencyCode}" ${selected}>${currencyCode}</option>`;
        droplist[i].insertAdjacentHTML('beforeend',optionTag);
    }
    console.log(i);
}
