
const selectionList = document.querySelectorAll('.selection-div select'),
button = document.querySelector('.exchange-rate  button'),
to = document.querySelector('.selection-div .to select'),
from = document.querySelector('.selection-div .from select'),
inputAmount = document.querySelector('.inter-amount input'),
resultText = document.querySelector('#result')
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

button.addEventListener('click',()=>{    
    resultText.innerText = 'Getting Results ......';
    let url = `https://v6.exchangerate-api.com/v6/4e52c37ac3dc20f13a920cef/latest/${from.value}`

    fetch(url)
    .then(res=>res.json())
    .then(data=>showExchange(data));
})

function showExchange(element){
    
    if(inputAmount.value == '' || inputAmount.value == 0){
        inputAmount.value = 1 ;
    }
    let totalAmount = (inputAmount.value * element.conversion_rates[to.value]).toFixed(2);

    resultText.innerText = ` ${inputAmount.value} ${from.value} = ${totalAmount} ${to.value}`;
    // console.log(element.conversion_rates[to.value]);
}