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
    cosole.log(newData);
    return newData;

}

bonusCalc(employees);
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
    // bonus = //rate +
    // newEmployeeInfo[1]= bonusPercent(array[1], array[3]);

    bonus = bonusPercent(employeeNumb, employeeRate) + employeeSenior(employeeNumb) + highIncomeEmployee();
    if (bonus > max_bonus) {
      bonus = max_bonus;
    }
    //the adjusted annual compensation (base annual + bonus)
    newEmployeeInfo[2] = adjustedAnnualIncome (array[2],newEmployeeInfo[1] ) ;
    //employee's total bonus rounded to the nearest dollar
    newEmployeeInfo[3] = Math.round(this.newEmployeeInfo[1]*100);

return newEmployeeInfo;
}
function adjustedAnnualIncome()
{
  console.log (array[2] += array[2]*this.newEmployeeInfo[1]*100);
}



function employeeSenior(employeeID) {
  var seniorityRate = 0;
  if (employeeID.length === 4) {
    seniorityRate = 0.05;
  }
  return seniorityRate;
}


function bonusPercent(employeeID, employeeRate) {
console.log(employeeID);
console.log(employeeRate);
var bonusRate;
switch (employeeRate) {
  case 1: bonusRate = 0; break;
  case 2: bonusRate = 0; break;
  case 3: bonusRate = 0.04; break;
  case 4: bonusRate =0.06; break;
  case 5: bonusRate = 0.10; break;
  }

  if (employeeID.length < 5) {
    return bonusRate +=0.5;
  }
  else {
    return bonusRate;
  }


}
