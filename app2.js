
const selectionList = document.querySelectorAll('.selection-div select')

;

for(i=0;i<selectionList.length;i++){
    let selected;
    for(let currencyCode in country_list){
        if(i==0){
            if(currencyCode == 'USD'){
                selected = 'selected'
            }else{
                selected = ''
            }
        }else{
            if(currencyCode == 'BDT'){
                selected = 'selected'
            }else{
                selected = ``;
            }
        }
        let option = `<option ${selected}>${currencyCode}</option>`
        selectionList[i].insertAdjacentHTML('beforeend',option);
        selectionList[i].addEventListener('change',(e)=>{
            loadFlag(e.target);
        })
    }
}

function loadFlag(any){
    for(currencyCode in country_list){
        if(currencyCode == any.value){
            any.parentElement.querySelector('img').src = `https://flagcdn.com/48x36/${country_list[currencyCode].toLowerCase()}.png`
        }
    }
}