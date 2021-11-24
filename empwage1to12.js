//UC1
const IS_ABSENT = 0

let empCheck = Math.floor(Math.random()*10) % 2;
if(empCheck == IS_ABSENT){
    console.log("Employee is absent");
}
else{
    console.log("Employee is present");
}

//uc2

const IS_PART_TIME =1;
const IS_FULL_TIME =2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR =20;

function getWorkingHours(empCheck){
    switch (empCheck) {
        case is_part_time:
            emphr = part_time_hours;
            break;
        case is_Full_time:
            emphr = full_time_hours;
            break;
        default:
            emphr = 0;
    }
}

empCheck = Math.floor(Math.random() * 10) % 3;
let emphr = getWorkingHours(empCheck);

// uc 4

const NUM_OF_WORKING_DAYS =2;
let emphr = 0;
for(let day=0;day<Num_of_working_days;day++){
    let empCheck = Math.floor(Math.random() * 10) % 3;
    emphr+=getWorkingHours(empCheck);
}

let empWage=emphr*wage_per_hour;

console.log("Total hrs: "+emphr+" Emp wage "+empWage);

// uc 5
const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS =10;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < Num_of_working_days){
    totalWorkingDays++;
    let empCheck =  Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}
let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("UC5 -TOTAL DAYS:" + totalWorkingDays + "Total Hrs:"+totalEmpHrs +"Emp Wages:");

//uc-6
const Num_of_working_days = 20;
const Max_hour_in_month = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let emphr = 0;

let empDailyWageArr=new Array();

while (totalEmpHrs <= Max_hour_in_month &&
    totalWorkingDays < Num_of_working_days)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    emphr= getWorkingHours(empCheck);
    totalEmpHrs +=emphr;
    empDailyWageArr.push(CalcDailyWage(emphr))
}
function CalcDailyWage(emphr){
    return emphr*wage_per_hour;
}

let empWage = CalcDailyWage(totalEmpHrs);

console.log("UC-6 Total Days: "+totalWorkingDays+" Total hours : "+totalEmpHrs+" Emp Wage : "+empWage);


// uc7
let totEmpWage = 0;

function sum(dailyWage) {

totEmpWage += dailyWage;

}

empDailyWageArr. forEach(sum);

console.log("UC7A Total Days: " + totalWorkingDays + "Total Hrs: " + totalEmpHrs +"Emp Wage:"  + totEmpWage); 

function totalWages (totalWage, dailyWage) {

return totalWage + dailyWage;

}

console.log("UC7A Emp Wage with reduce: " + empDailyWageArr.reduce (totalWages, 0));


// UC 7D- Find the first occurrence when Full Time Wage was earned using find function 
function findFulltimewage (dailyWage) {

    return dailyWage.includes ("160");
    
    console.log("UC 7D- First time Fulltime wage was earned on Day: "+ mapDayWithwageArr.find (findFulltimewage));
    
    // UC 7E- Check if Every Element of Full Time Wage is truely holding Full time wage
    
    function isAllFulltimewage (dailyWage) {
     return dailyWage. includes ("160");
    }
    console.log("UC 6E- Check All Element have Full Time Wage: "+ fullDayWageArr.every(isAllFulltimeWage));
    
    // UC 7F - Check if there is any Part Time Wage function isAnyPartTimeWage (dailyWage) {
    
    return dailyWage. includes ("80");
    
    }
    
    console.log("UC 7F- Check If Any Part Time Wage: "+
    
    mapDayWithWageArr.some (isAnyPartTimeWage));
    
    
    // UC 7G- Find the number of days the Employee Worked
    
    function totalDaysWorked (numOfDays, dailyWage) {
      if (dailyWage > e) return numOfDays+1;
      return numOfDays;
     }
    
    console.log("UC 7G- Number of Days Emp Worked: "+
    
          empDailyWageArr.reduce (totalDaysWorked, 0));


//UC 8
const MAX_HRS_IN_MONTH = 160;

const NUM_OF_WORKING_DAYS = 20;

let totalEmpHrs = 0;

let totalWorkingDays = 0;



let empDailyWageArr = new Array();

let empDailyWageMap = new Map();

function calcDailyWage (empHrs) {

return empHrs * WAGE_PER_HOUR;

}

while (totalEmpHrs <= MAX_HRS_IN_MONTH &&

  totalWorkingDays < NUM_OF_WORKING_DAYS) {

  totalWorkingDays++;

  let empCheck = Math.floor(Math.random()* 10) % 3;
  let empHrs = getWorking_Hours (empCheck);

  totalEmpHrs += empHrs;

  empDailyWageArr.push(calcDailyWage (empHrs));

  empDailyWageMap.set(totalWorkingDays, calcDailyWage (empHrs));

}

console.log(empDailyWageMap);

function totalWages (totalWage, dailyWage) { 
 return totalWage + dailyWage;

}

console.log("UC7A- Emp Wage Map totalHrs: " +
           Array.from(empDailyWageMap.values()). reduce (totalWages, 0));

    // uc9

    const findTotal = (totalVal, dailyVal) => {

        return totalVal + dailyVal;
        
        }
        let count = 0;
        
        let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0); 
        
        let totalSalary = empDailyWageArr. filter(dailyWage => dailyWage > 0) 
               .reduce(findTotal, 0);
        
        console.log("UC9A- Emp Wage with Arrow.: " + "Total Hours: " +
        
                         totalHours + "Total Wages: " + totalSalary);
        
        let nonWorkingDays = new Array();
        
        let partWorkingDays = new Array();
        
        let fullWorkingDays = new Array();
        
        empDailyHrsMap.forEach( (value, key, map) => { 
        if (value == 8) fullWorkingDays.push(key);
        
        else if (value == 4) partWorkingDays.push(key);
        
        else nonWorkingDays.push (key);
        
        });
        
        console.log("Full Working Days: "+fullWorkingDays);
        
        console.log("Part Working Days: "+partWorkingDays); 
        console.log("Non Working Days: "+nonWorkingDays);

            
        // UC12
        class EmployeePayrollData {

            // property
            
            id;
            
            salary;
            
            gender;
            
            startDate;
            
            // constructor
            
            constructor(...params) {
            
              this.id = params[0];
            
              this.name = params [1];
            
              this.salary = params [2];
            
              this.gender = params [3];
            
              this.startDate = params [4];
            
            }
            
            //getter and setter method
            
            get name () { return this._name; }
             
            set name (name) { this._name= name; }
            
            // method
            
            toString() {
              const options = {year: 'numeric', month: 'long', day: 'numeric' };
            
              const empDate = this.startDate === undefined ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", options);
            
              return "id=" + this.id +", name=" + this.name + ", salary=" + this.salary +", "+ 
                                 "gender=" + this.gender + ", startDate=" + empDate;
            
              }
            }
            
            let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
            
            console.log(employeePayrollData.toString());
            
            employeePayrollData.name = "john";
            
            console.log(employeePayrollData.toString()); 
            
            let newEmployeePayrollData = new EmployeePayrollData(1, "Terrisa", 30000, "F", new Date());
            
            console.log(new EmployeePayrollData.toString());