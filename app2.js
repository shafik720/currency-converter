
const selectionList = document.querySelectorAll('.selection-div select'),
img = document.querySelector('.selection-div img')
;


for(let i=0; i<selectionList.length;i++){
    let option;
    let selected;
    for(let currencyCode in country_list){
        if(i==0){
            if(currencyCode == 'USD'){
                selected = 'selected';
            }else{
                selected = '';
            }
        }
        if(i==1){
            if(currencyCode == 'BDT'){
                selected = 'selected' ;
            }else{
                selected = '';
            }
        }
        option = `<option ${selected}>${currencyCode}</option>`;
        selectionList[i].insertAdjacentHTML('beforeend',option);
        selectionList[i].addEventListener('change',(e)=>{
            loadFlag(e.target);
        })
    }
}
function loadFlag(any){
    // console.log(any.value);
    for(let currencyCode in country_list){
        if(currencyCode == any.value){
            any.parentElement.querySelector('img').src = `https://flagcdn.com/48x36/${country_list[currencyCode].toLowerCase()}.png`;
        }
    }
}