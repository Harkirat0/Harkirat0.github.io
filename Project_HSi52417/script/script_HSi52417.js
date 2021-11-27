function runValidate(form) {
    if (validateName(form) && validateNum(form) && validateEmail(form) && validateFiles(form))
        return true;
    else
        return false;
}

function validateName(form) {
    var name = form.elements["name"];

    if (name.validity.valueMissing) {
        name.setCustomValidity("Please enter Patient's name here");
        return false;
    } else {
        name.setCustomValidity("");
        return true;
    }
}

function validateNum(form) {
    var phone = form.elements["phone_number"];

    if (phone.validity.valueMissing) {
        phone.setCustomValidity("Please enter phone number");
        return false;
    } else if (phone.validity.patternMismatch) {
        phone.setCustomValidity("Please enter a ten digit phone number");
        return false;
    } else {
        phone.setCustomValidity("");
        return true;
    }
}

function validateEmail(form) {
    var email = document.getElementById("email");

    if (email.validity.valueMissing) {
        email.setCustomValidity("Please enter the email address");
        return false;
    } else if (email.validity.typeMismatch) {
        email.setCustomValidity("Email is not in correct format")
        return false;
    } else {
        email.setCustomValidity("");
        return true;
    }
}

function validateFiles(form) {
    var inputFiles = form.elements["upload_button"];
    var files = inputFiles.files;

    if (files.length == 0) {
        alert("Please select files of the  pdf, jpeg, png, jpg formats.")
        return false;
    } else {
        email.setCustomValidity("");
        return true;
    }
}

function calCost(form) {
    let time = form.elements["frequency"];
    let time_length;
    var time_val;
    const week = 52;
    const bi = 26;
    const month = 12;

    for (let i = 0; i < time.length; i++) {
        if (time[i].checked) {
            time_val = time[i].value;
            break;
        }
    }

    if (time_val == "Weekly") {
        time_length = week;
    } else if (time_val == "Bi-Weekly") {
        time_length = bi;
    } else {
        time_length = month;
    }



    var cost = form.elements["med_cost"].value;

    if (isNaN(cost)) {
        alert("Please enter numerical values only");
        return false;
    }

    var total_cost = (time_length) * (cost);
    var reduced_cost = (total_cost) - ((20) * (total_cost)) / (100);
    var savings = total_cost - reduced_cost;
    var savings_txt = Math.round(savings).toString();
    const yearly = "yearly";
    var target = document.getElementById('p_out');

    target.innerHTML = "What you pay with others: &emsp;$" + total_cost + " " + yearly + "<br>";
    target.innerHTML += "You will save with us: &emsp;$" + "<b>" + savings_txt.fontcolor("green") + "</b>" + " " + yearly + "<br>";

}