
let droplist = document.querySelectorAll('.selection-div select');
let exchangeBtn = document.querySelector('.exchange-rate button');
let from = document.querySelector('.from select');
let to = document.querySelector('.to select');
let fromImg = document.querySelector('.from img');
let toImg = document.querySelector('.to img');

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
        droplist[i].addEventListener('change',e=>{
            loadFlag(e.target);
            showExchangeRate();
        })
    }
}
function loadFlag(element){
    for(currencyCode in country_list){
        if(currencyCode == element.value){
            let img = element.parentElement.querySelector('img');
            img.src = `https://flagcdn.com/48x36/${country_list[currencyCode].toLowerCase()}.png`;
            console.log(currencyCode);
        }
    }
}

exchangeBtn.addEventListener('click',()=>{  
    showExchangeRate();
})
function exchange(){
    let storeValue = from.value;
    from.value = to.value;
    to.value = storeValue;
    showExchangeRate();
    for(currencyCode in country_list){
        if(currencyCode == from.value){
            fromImg.src = `https://flagcdn.com/48x36/${country_list[currencyCode].toLowerCase()}.png` ;
        }
        if(currencyCode == to.value){
            toImg.src = `https://flagcdn.com/48x36/${country_list[currencyCode].toLowerCase()}.png` ;
        }
        
    }
}
function showExchangeRate(baseCode){
    let url = ` https://v6.exchangerate-api.com/v6/1ae1edd2a56384f2549082e0/latest/${from.value}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{

        let interAmount = document.querySelector('.inter-amount input');
        let interAmountValue = interAmount.value;
        if(interAmount.value == 0 || interAmount.value ==''){
            interAmount.value  = 1;
            interAmountValue = 1;
        }
        let conversionRate = data.conversion_rates[to.value];
        let exchangeAmount = (interAmount.value * conversionRate).toFixed(2);
        document.getElementById('result').innerText = `${interAmount.value} ${from.value} = ${exchangeAmount} ${to.value}`
        
    });
}

// window.addEventListener('load',()=>{
//     showExchangeRate();
// })
showExchangeRate();