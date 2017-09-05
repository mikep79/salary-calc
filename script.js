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

/*

done 1. Store employees[i].(salary/12) in var monthlyCost using +=.
not neccessary 2. Create button that when clicked will update monthlyCost?
done 3. Find a way to post monthlyCost to DOM.

Opt: 
done 1. Put new employee info onto DOM. Each time 'submit' is pressed.
done 2. (hard) Create delete button

HELPFUL NOTES:
.val() can take a function as a parameter. Useful?

OBJECTIVES:
A 'Submit' button should collect the form information, store the 
information to calculate monthly costs, append information to the DOM and clear the input fields. 
Using the stored information, calculate monthly costs and append this to the to DOM.

## Hard Mode
Create a delete button that removes an employee from the DOM. For Hard mode, it 
does not need to remove that Employee's salary from the reported total.

## Pro Mode
Once the employee is deleted, update the total spend on salaries account for this employee's removal. 
This will require that the logic knows which element was removed. Look into jQuery's .data() function. 
You will need to do something both when the employee is added and when they are deleted.

*/