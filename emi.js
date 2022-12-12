function calculate(P, n, r){
    n *= 12;
    r /= 1200;

    return (P * r * Math.pow((1 + parseFloat(r)), n)) / (Math.pow((1 + parseFloat(r)), n) - 1);
}

function calculatedEMI(){
    let loan = document.getElementById("loan"); 
    let year = document.getElementById("year");
    let interest = document.getElementById("interest");
    let emi = document.getElementById("emi");
    let total = document.getElementById("total");
    
    // let data = document.getElementsByName("period");
    // if(data[0].checked==true){
    //     price = calculate(loan.value, year.value, interest.value).toFixed(4);
    // }else{
    //     price = calculate(loan.value, year.value, interest.value/1200).toFixed(4);
    // }
    
    let price = calculate(loan.value, year.value, interest.value).toFixed(4);

    emi.value = price + " per month";

    total.value = price * 12 * year.value;
    
}
