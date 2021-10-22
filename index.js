/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function createEmployeeRecord (employeeArray) {
     let record = {
         firstName: employeeArray[0],
         familyName: employeeArray[1],
         title: employeeArray[2],
         payPerHour: employeeArray[3],
         timeInEvents: [],
         timeOutEvents: []
     }
     return record
 }

 function createEmployeeRecords (arrayEmployee) {
    return arrayEmployee.map(item => createEmployeeRecord(item))
 }

 function createTimeInEvent (dateStamp) {
    const date = dateStamp.split(" ")[0]
    const hour = parseInt(dateStamp.split(" ")[1])

    this.timeInEvents.push ({
        type: "TimeIn" ,
        hour: hour ,
        date: date
    })
    return this
}

function createTimeOutEvent (dateStamp) {
    const date = dateStamp.split(" ")[0]
    const hour = parseInt(dateStamp.split(" ")[1])

    this.timeOutEvents.push ({
        type: "TimeOut" ,
        hour: hour ,
        date: date
    })
    return this
}


function hoursWorkedOnDate (dateForm) {
    let timeIn = this.timeInEvents.find(item => {
        return item.date === dateForm
    }).hour
    let timeOut = this.timeOutEvents.find(item => {
        return item.date === dateForm
    }).hour
    //console.log(this)
    return (timeOut - timeIn) / 100
}

function wagesEarnedOnDate (dateStamp) {
    let hoursWorked = hoursWorkedOnDate.call(this, dateStamp);
    let payRate = this.payPerHour

    return hoursWorked * payRate
}
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName (srcArray, firstName){
    return srcArray.find(item => item.firstName == firstName)
}

function calculatePayroll (arrayEmployee){
 return arrayEmployee.reduce((total, item) => {
  return total + allWagesFor.call(item)
  },0) 
}