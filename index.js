
function validateForm() {
    let fname = document.forms['myform']["fname"].value;
    let uname = document.forms['myform']["uname"].value;
    let lname = document.forms['myform']["lname"].value;
    let email = document.forms['myform']["email"].value;
    let mobileno = document.forms['myform']["mobileno"].value;
    let pass = document.forms['myform']["pass"].value;
    let cfpass = document.forms['myform']["cfpass"].value;
    let date = document.forms['myform']["dob"].value;

    // validate code 

    //user Name
    if (uname === "") {
        document.getElementById("v_uname").innerHTML = '**Enter Your Username**';
        return false;
    }
    else if (uname.length < 3) {
        document.getElementById("v_uname").innerHTML = '**Username must be 3 character**';
        return false;
    }
    else if (uname.length > 20) {
        document.getElementById("v_uname").innerHTML = '**Username must be less than 20 character**';
        return false;
    }
    //first name
    if (fname == "") {
        document.getElementById("v_fname").innerHTML = '**Enter Your  FirstName**';
    }

    //last name
    if (lname == "") {
        document.getElementById("v_lname").innerHTML = '**Enter Your LastName**';
    }
    //email
    if (email == "") {
        document.getElementById("v_email").innerHTML = '**Enter Your  Mail Address**';
    }
    //mobile
    if (mobileno == "") {
        document.getElementById("v_mobileno").innerHTML = '**Enter Your  Mail Address**';
    }
    //password
    if (pass = " ") {
        document.getElementById("v_pass").innerHTML = '**Enter Your Password**';
    }
    //confirm password
    if (cfpass = " ") {
        document.getElementById("v_cfpass").innerHTML = '**Enter Your Confirm Password**';
    }
    //date
    if (date = " ") {
        document.getElementById("v_date").innerHTML = '**Enter Your Date Of Birth**';
    }
    console.log(date);

    setInterval(() => {
        document.getElementById("v_fname").innerHTML = '';
        document.getElementById("v_uname").innerHTML = '';
        document.getElementById("v_lname").innerHTML = '';
        document.getElementById("v_email").innerHTML = '';
        document.getElementById("v_mobileno").innerHTML = '';
        document.getElementById("v_pass").innerHTML = '';
        document.getElementById("v_cfpass").innerHTML = '';
        document.getElementById("v_date").innerHTML = '';

    }, 2000)
    return false;

}