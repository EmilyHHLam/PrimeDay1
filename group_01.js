var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];


function bonusCalc(employees) {



  var newData = [];
    for (var i = 0; i<employees.length; i++){
      newData.push(processEmployee(employees[i]));

    }
    console.log(newData);
    return newData;


}


bonusCalc(employees);
//magic number!
var max_bonus = 0.13;
var bonus =0;
function processEmployee(array){
    var employeeNumb = array[1];
    var employeeSalary = array[2];
    var employeeRate = array[3];

    var newEmployeeInfo = [];
    //The first index should also contain the employee's name
    newEmployeeInfo[0] = array[0];

    //The second index should contain the bonus percentage the employee is to receive
    bonus = bonusPercent(employeeNumb, employeeRate) + employeeSenior(employeeNumb) - highIncomeEmployee(employeeSalary);

    //No bonus can be above 13% or below 0% total
    if (bonus > max_bonus) {
      bonus = max_bonus;
    } else if (bonus < 0){
      bonus = 0;
    }
    newEmployeeInfo[1] = bonus;

    //the adjusted annual compensation (base annual + bonus)
    newEmployeeInfo[2] = Math.round(employeeSalary*(1 + bonus)) ;

    //employee's total bonus rounded to the nearest dollar
   newEmployeeInfo[3] = Math.round(employeeSalary*bonus);

return newEmployeeInfo;
}

//calculate the rate of seniority who stays at the company 15 yrs or more
function employeeSenior(employeeID) {
  var seniorityRate = 0;
  if (employeeID.length ===4){
    seniorityRate = 0.05;
  }
  return seniorityRate;
}
//calculate the rate of the employees who gets paid higher than 65,000
function highIncomeEmployee(employeeSalary) {
  var highPaidRate = 0;
  employeeSalary = parseInt(employeeSalary);
  if (employeeSalary > 65000){
    highPaidRate = 0.01;
  }
  return highPaidRate;
}


//calculate the standard bonus
function bonusPercent(employeeID, employeeRate) {
var bonusRate;
switch (employeeRate) {
  case 1: bonusRate = 0; break;
  case 2: bonusRate = 0; break;
  case 3: bonusRate = 0.04; break;
  case 4: bonusRate =0.06; break;
  case 5: bonusRate = 0.10; break;
  }
return bonusRate;
}
