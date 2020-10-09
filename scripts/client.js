$(document).ready(onReady);

const employeeInfo = [];

function onReady() {
  $('.js-submitButton').on('click', addEmployeeInfo);
}

function addEmployeeInfo() {
  //get employee information
  const firstName = $('.js-firstName').val();
  const lastName = $('.js-lastName').val();
  const idNumber = $('.js-idNumber').val();
  const jobTitle = $('.js-jobTitle').val();
  const annualSalary = $('.js-annualSalary').val();

  //store employee info
  const employee = {
    firstName,
    lastName,
    employeeId: idNumber,
    jobTitle,
    annualSalary,
  };
  employeeInfo.push(employee);
  addToTable();
}

function addToTable() {
  $('.js-employeeInfo').empty();
  for (let i = 0; i < employeeInfo.length; i++) {
    const employee = employeeInfo[i];
    $('.js-employeeInfo').append(
      `<tr><td>${employee.firstName}</td><td>${employee.lastName}</td><td>${employee.employeeId}</td><td>${employee.jobTitle}</td><td>${employee.annualSalary}</td></tr>`
    );
  }
}
