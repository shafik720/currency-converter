
const selectionMenu = document.querySelectorAll('.selection-div select');

for(let i=0; i<selectionMenu.length;i++){
    let selected;
    for(let currencyCodes in country_list){
        if(i==0){
            if(currencyCodes == 'USD'){
                selected = 'selected';
            }else{
                selected = '';
            }
        }else if(i==1){
            if(currencyCodes == 'BDT'){
                selected = 'selected';
            }else{
                selected = '';
            }
        }

        let option = `<option ${selected} >${currencyCodes}</option>`
        selectionMenu[i].insertAdjacentHTML('beforeend', option);
        
    }
}