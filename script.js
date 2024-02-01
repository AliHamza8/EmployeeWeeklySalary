const btnCalculate = document.querySelector('.calculate-salary');

const hourlySalary = document.querySelector('.hourly-wages');

let dailyHours = document.querySelectorAll('.daily-working');
let overtimeHours = document.querySelectorAll('.overtime-working');

let totalDailyHours = document.querySelector('.calculate-daily-hours');
let totalDailySalary = document.querySelector('.calculate-daily-salary');

let totatlOvertimeHours = document.querySelector('.calculate-overtime-hours');
let totalOvertimeSalary = document.querySelector('.calculate-overtime-salary');

let totalSalary = document.querySelector('.total-salary');
let totalHours = document.querySelector('.total-hours');

let netSalary = document.querySelector('.net-salary');

function calculateDailyHours() {
    let calcHours = 0;
    dailyHours.forEach(hour => {
        calcHours = calcHours + hour.value;
    });
    return calcHours;
}

function calculateOvertimeHours() {
    let calcHours = 0;
    overtimeHours.forEach(hour => {
        calcHours = calcHours + hour.value;
    });
    return calcHours;
}

function regularHours() {
    totalDailyHours.value = calcHours();
}