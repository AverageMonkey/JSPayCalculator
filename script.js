function Calculator() {
    let endResult = document.querySelector("#endResult");
    let name = document.querySelector("#name");
    let hours = document.querySelector("#HoursWorked");
    let pay = document.querySelector("#hourlyPay");

    var maxHours = 20;
    var hourlyPay = 20;

    if (hours.value < maxHours) {
        var hoursRemaining = maxHours - hours.value;
        var payment = hourlyPay * hours.value;

        endResult.innerHTML = name.value + " you have worked " + hours.value + " hours. You can work " + hoursRemaining + " more hours this week. Your pay is $" + payment; 
    }
}