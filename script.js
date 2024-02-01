const btnCalculate = document.querySelector('.btn-calculate');

const hourlySalary = document.querySelector('.hourly-wages');

let dailyHours = document.querySelectorAll('.daily-working');
let overtimeHours = document.querySelectorAll('.overtime-working');

let totalDailyHours = document.querySelector('.calculate-daily-hours');
let totalDailySalary = document.querySelector('.calculate-daily-salary');

let totalOvertimeHours = document.querySelector('.calculate-overtime-hours');
let totalOvertimeSalary = document.querySelector('.calculate-overtime-salary');

let totalSalary = document.querySelector('.total-salary');
let bonus = document.querySelector('.bonus');

let netSalary = document.querySelector('.net-salary');



function calculateDailyHours() {
    let calcHours = 0;
    dailyHours.forEach(hour => {
        if(hour.value === '') 
        alert("enter something");
        else
        calcHours = calcHours + parseFloat(hour.value);
    });
    totalDailyHours.value = calcHours;
    return calcHours;
}

function calculateOvertimeHours() {
    let calcHours = 0;
    overtimeHours.forEach(hour => {
        if(hour.value === '') 
        alert("enter something");
        else
        calcHours = calcHours + parseFloat(hour.value);
    });
    totalOvertimeHours.value = calcHours;
    return calcHours;
}


function regularSalary() {
    totalDailySalary.value = calculateDailyHours() * parseFloat(hourlySalary.value);
    return totalDailySalary.value;
}

function overtimeSalary() {
    totalOvertimeSalary.value = calculateOvertimeHours() * parseFloat(hourlySalary.value);
    return totalOvertimeSalary.value;
}

function calculateTotalSalary() {
    totalSalary.value = parseFloat(regularSalary()) + parseFloat(overtimeSalary());
    return totalSalary.value; 
}

function calculateBonus() {
    const bonusMoney = (parseFloat(calculateTotalSalary()) * 15) / 100;
    bonus.value = bonusMoney;
    return bonus.value;
}

function empNetSalary() {
    const totalSalaryValue = parseFloat(calculateTotalSalary());
    const bonMon = parseFloat(calculateBonus());
    netSalary.value = totalSalaryValue + bonMon;
    console.log(netSalary.value);
    return netSalary.value;
}


btnCalculate.addEventListener("click", function() {
    try {
        calculateDailyHours();
        calculateOvertimeHours();
        regularSalary();
        overtimeSalary();
        calculateTotalSalary();
        calculateBonus();
        empNetSalary();
    }
    catch {
        console.log("error")
    }
    
})

