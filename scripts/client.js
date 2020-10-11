$(document).ready(onReady);

const employeeInfo = [];

function onReady() {
  $('.js-submitButton').on('click', addEmployeeInfo);
  $('.js-employeeInfo').on('click', '.js-deleteButton', deleteEmployee);
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
  addMonthlyTotal();
  $('.js-firstName').val('');
  $('.js-lastName').val('');
  $('.js-idNumber').val('');
  $('.js-jobTitle').val('');
  $('.js-annualSalary').val('');
}

function addToTable() {
  $('.js-employeeInfo').empty();
  for (let i = 0; i < employeeInfo.length; i++) {
    const employee = employeeInfo[i];
    $('.js-employeeInfo').append(
      `<tr><td>${employee.firstName}</td><td>${employee.lastName}</td><td>${employee.employeeId}</td><td>${employee.jobTitle}</td><td>$${employee.annualSalary}</td><td><button class="js-deleteButton">Delete</button></td></tr>`
    );
  }
}

function addMonthlyTotal() {
  let total = 0;
  for (let i = 0; i < employeeInfo.length; i++) {
    const monthlySalary = employeeInfo[i].annualSalary / 12;
    total += Number(monthlySalary.toFixed(2));
    $('.js-totalMonthly').text(total);
  }
  if (total > 20000) {
    $('.js-totalMonthlyLine').css('background-color', 'tomato');
  }
}

function deleteEmployee() {
  $(this).parent().parent().remove();
}
