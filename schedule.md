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


Live solve Notes:
Try getting just one thing complete and on the DOM first (eg employee name).

To do list:
- [x]  created basic files and source in script files.          - [x] = complete
    -commit -m 'created basic files and sourced in script files.' (copy)
- [] create input field for first name
    Form pros vs cons. Form automatically refreshes in HTML, so need to correct for that.
    Inputs are final destination in tree, so no closing tag (won't ever nest div's into inputs.)
    .text and .html used normally, but .val() has to be used with inputs b/c no closing tag.
- [] append name to DOM in an HTML table
- [] add ID, job title, salary, and last name
- [] salary total calculation
- [] refactor the code into functions
- [] ability to remove a user

Commit frequently with each achievement. Don't need to push each commit!

parseFloat - converts with number WITH decimal.
parseInt - also rounds to nearest integer.




$('#submitButton').on('click', function() {
    var firstName = $('#firstName').val();

    var $row = $('<tr></tr>');
    $row.append('<td>' + firstName + '</td>');
    $('#employeeData').append($row);                // first goal accomplished

    another way:
    $('employeeData').append('<tr><td>' + firstName + '</td></tr>')   // (longer, but one line. Avoid use.)


    var lastName = $('#lastName').val();
    $row.append('<td>' + lastName + '</td>');       // now append other elements.
    
    var idNumber = $('#idNumber').val();
    $row.append('<td>' + idNumber + '</td>');
    
    var jobTitle = $('#jobTitle').val();
    $row.append('<td>' + jobTitle + </td>');

});

$('#employeeData').empty();         // or   $('#employeeData').html('');
    use this to clear data each time you append with a new submit button click. (First step in
    'display new employee' function.) Also reset monthlyCost.
    This allows you to remove an element by simply taking the person out of the array, then
    refreshing, rather than having to find the element individually.