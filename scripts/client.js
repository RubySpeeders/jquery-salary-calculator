$(document).ready(onReady);

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

  const employee = {
    firstName,
    lastName,
    employeeId: idNumber,
    jobTitle,
    annualSalary,
  };

  console.log(employee);
}
