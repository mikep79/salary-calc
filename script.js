$(document).ready(onReady);

var employees = [];
var monthlyCost = 0;
employeeCounter = 0;

function onReady() {    
// event listener for submit button
    $('#submitButton').on('click', addEmployee);
    $('.container').on('click', '.deleteButton', deleteEmployee);
}

// constructor to create new employee
function Employee (fName, lName, idNumber, title, salary) {
    this.fName = fName;
    this.lName = lName;
    this.idNumber = idNumber;
    this.title = title;
    this.salary = salary;             // change from yearly string to monthly number
    monthlyCost += parseInt(this.salary/12);
    $('#monthlyCost').text(monthlyCost);           // update monthly cost to DOM
}

// when clicked, add new employee to array
function addEmployee() {
    $fName = $('#fName');
    $lName = $('#lName');
    $idNumber = $('#idNumber');
    $title = $('#title');
    $salary = $('#salary');
    
    // alert user if field left blank
    if ($fName.val() === '' || $lName.val() === '' || $idNumber.val() === '' || $title.val() === '' || $salary.val() === ''){
        alert('Please enter all fields. Thanks. :)');
        return;
    }
    var employee = (new Employee ($fName.val(), $lName.val(), $idNumber.val(), $title.val(), $salary.val()));
    console.log(employee);
    employees.push(employee);
    // clear values
    $fName.val(''); $lName.val(''); $idNumber.val(''); $title.val(''); $salary.val('');
    //$('.inputs').val('');     // could use this instead to clear ALL values.
    newEmployeeDiv();
}

function newEmployeeDiv() {
    var $article = $('<article><p>');
    $('.container').append($article);
    $article.append(employees[employeeCounter].fName + ' ' + employees[employeeCounter].lName);
    $article.append('<br>ID Number: ' + employees[employeeCounter].idNumber);
    $article.append('<br>' + employees[employeeCounter].title);
    $article.append('<br>Annual Salary: $' + employees[employeeCounter].salary);
    $article.append('<br><button class="deleteButton">Delete</button></p>');
    employeeCounter++;
}

function deleteEmployee() {    
    $(this).parent().remove();
}