$(document).ready(function () {

    // Validate phone number
    $("#phone").keyup(function () {
        var inputValue = $("#phone").val();
        var field = document.getElementById("phone");
        if((isNaN(inputValue) || (inputValue.length != 8 && inputValue.length > 0))) {
            field.setCustomValidity("Type a valid phone number.");
        }
        else {
            field.setCustomValidity("");
        }
    });

    // If the checkbox (referred) is checked, show input (referee).
    $("#referred").click(function () {
        $("#referee").toggle(this.checked);
        if(this.checked) {
            $("#referee").prop("required", true);
        }
        else {
            $("#referee").prop("required", false);
        }
    });

    // Pressing enter on a checkbox will act as a click and check it.
    $("input:checkbox").keypress(function(e){
        if((e.keyCode ? e.keyCode : e.which) == 13){
            $(this).trigger('click');
        }
    });

    // Prevent enter to be used outside of textarea and the submit button.
    $(document).on("keypress", ":input:not(textarea):not(button)", function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
});

// Set max date (read: minimum age).
function setMaxDate() {
    var element = document.getElementById("dob");
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var date = d.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (date < 10) {
        date = "0" + date;
    }
    var yearOffset = 18;
    var maxDate = "" + year - yearOffset + "-" + month + "-" + date;
    element.setAttribute("max", maxDate);
}