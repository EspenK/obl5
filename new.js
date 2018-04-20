$(document).ready(function () {

    $("#name").change(function () {
        var name = $("#name");
        if (!name.val().includes(" ")) {
            this.setCustomValidity("Enter full name");
        }
        else {
            this.setCustomValidity("");
        }
    });

    $("#username").change(function () {
        var username = $("#username");
        if (username.val().includes(" ")) {
            this.setCustomValidity("No space in username");
        }
        else {
            this.setCustomValidity("");
        }
    });

    $("#email").change(function () {
        var email = $("#email");
        var re = /([A-Za-z0-9._+-]+@[A-Za-z0-9._+-]+\.[A-Za-z]+)/;
        if (!re.test(email.val())) {
            this.setCustomValidity("Enter valid email")
        }
        else {
            this.setCustomValidity("");
        }
    });

    $("#phone").change(function () {
        var phone = $("#phone");
        if ((isNaN(phone.val()) || (phone.val().length != 8 && phone.val().length > 0))) {
            this.setCustomValidity("Enter valid phone number");
        }
        else {
            this.setCustomValidity("");
        }
        console.log(phone.val());
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

    // Allow the user to press enter to check a checkbox
    $("input:checkbox").keypress(function(e){
        if((e.keyCode ? e.keyCode : e.which) == 13){
            event.preventDefault();
            $(this).trigger('click');
        }
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

    // Run when the document loads
    setMaxDate();
});

// Handle the data when the form is submitted (not)
function submitAlert() {
    alert("Your request was received (not really though)");
}
