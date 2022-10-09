
let droplist = document.querySelectorAll('.selection-div select');
let exchangeBtn = document.querySelector('.exchange-rate button');
let from = document.querySelector('.from select');
let to = document.querySelector('.to select');

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
}

exchangeBtn.addEventListener('click',()=>{  
    showExchangeRate();
})

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
        console.log(data);
        let conversionRate = data.conversion_rates[to.value];
        let exchangeAmount = (interAmount.value * conversionRate).toFixed(2);
        document.getElementById('result').innerText = `${interAmount.value} ${from.value} = ${exchangeAmount} ${to.value}`
        console.log(exchangeAmount);
        
    });
}

// window.addEventListener('load',()=>{
//     showExchangeRate();
// })
showExchangeRate();