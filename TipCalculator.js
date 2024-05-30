const amount=document.querySelector("#amount");
const percentage=document.querySelector("#percentage");
const button=document.querySelector("#btn");
const msg=document.querySelector("#total");


    function calculateTotal(){
        const amountValue=amount.value;
        const percentageValue=percentage.value;
        const value=amountValue*(1+percentageValue/100);
        msg.innerHTML=value;
    }

btn.addEventListener("click", calculateTotal);



