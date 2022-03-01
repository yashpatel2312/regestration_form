const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const date = document.getElementById('date');
const pass = document.getElementById('password');
const cpass = document.getElementById('cpassword');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');

let validEmail = false;
let validPhone = false;
let validUser = false;
let ValidDate = false;
let ValidPass = false;
let ValidCpass = false;
let ValidFname = false;


$('#failure').hide();
$('#success').hide();



fname.addEventListener('blur', () => {
    console.log("firstname is blured");
    //validate pass here 
    let firstname = fname.value;
    let regex = /^[a-zA-Z]([a-zA-Z]){2,20}$/;
    console.log(firstname,regex);
    if (regex.test(firstname)) {
        console.log('Your first name is valid');
        fname.classList.remove('is-invalid');
        fname.classList.add('is-valid');
        ValidFname = true;
    } else  {
        console.log('Your first name is not valid');
        fname.classList.remove('is-valid');
        fname.classList.add('is-invalid');
        ValidFname = false;

    }
})

lname.addEventListener('blur', () => {
    console.log("last name is blured");
    //validate pass here 
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let lastname = lname.value;
    console.log(lastname, regex);

    if (regex.test(lastname)) {
        console.log('Your last name is valid');
        lname.classList.remove('is-invalid');
        lname.classList.add('is-valid');
    } else if (lastname != "") {
        console.log('Your last name is valid blank');
        lname.classList.remove('is-invalid');
        lname.classList.add('is-valid');

    }

})

name.addEventListener('blur', () => {
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        name.classList.add('is-valid');
        validUser = true;
    }
    else {
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        name.classList.remove('is-valid');
        validUser = false;

    }
})

email.addEventListener('blur', () => {
    console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        validEmail = true;
    }
    else {
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        validEmail = false;
    }
})

phone.addEventListener('blur', () => {
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
        validPhone = true;
    }
    else {
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        phone.classList.remove('is-valid');
        validPhone = false;

    }
})

date.addEventListener('blur', () => {
    console.log("date is blured")
    //Validate Date here 
    let regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
    let datestring = date.value;
    console.log(regex, datestring);
    if (regex.test(datestring)) {
        var parts = datestring.split("/");
        var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
        var dtCurrent = new Date();
        document.getElementById('datevalid').innerHTML = 'Eligibility 18 years ONLY.';

        if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
            console.log('not valid');
            document.getElementById('datevalid').innerHTML = 'Eligibility 18 years ONLY.';
            date.classList.add('is-invalid');
            date.classList.remove('is-valid');
            return false;
        }

        if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {

            //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
            if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                console.log('not');
                return false;
            }
            if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
                if (dtCurrent.getDate() < dtDOB.getDate()) {
                    console.log('not valid date');
                    return false;
                }
            }
        }
        console.log('valid date');
        date.classList.remove('is-invalid');
        date.classList.add('is-valid');
        ValidDate = true;
    } else {
        console.log('Your date is not valid');
        document.getElementById('datevalid').innerHTML = 'you must enter correct date';
        date.classList.add('is-invalid');
        date.classList.remove('is-valid');
        ValidDate = false;

    }
})

pass.addEventListener('blur', () => {
    console.log("password is blured");
    let regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let psw = pass.value;
    console.log(regex, psw);
    if (regex.test(psw)) {
        console.log('password is valid');
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
        ValidPass = true;
    } else {
        console.log('password is not valid');
        password.classList.add('is-invalid');
        password.classList.remove('is-valid');
        ValidPass = false;
    }
})



cpass.addEventListener('blur', () => {
    console.log("cpassword is blured");

    //validate pass here 
    let Cpassword = cpass.value;
    let password = pass.value;
    console.log(Cpassword, password);
    if (Cpassword == "") {
        console.log('password is blank');
        document.getElementById('cpasswordvalid').innerHTML = 'password is blank'
        cpassword.classList.add('is-invalid');
        cpassword.classList.remove('is-valid');
        ValidCpass = false;
    } else if (Cpassword == password) {
        console.log("password matched");
        cpassword.classList.remove('is-invalid');
        cpassword.classList.add('is-valid');
        ValidCpass = true;
    } else {
        console.log('must enter password');
        document.getElementById('cpasswordvalid').innerHTML = 'your password should be matched'
        cpassword.classList.add('is-invalid');
        cpassword.classList.remove('is-valid');
        ValidCpass = false;
    }

})



let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('You clicked on submit');
    console.log(validEmail, validUser, validPhone, ValidDate, ValidPass, ValidCpass);

    // Submit your form here
    if (validEmail && validUser && validPhone && ValidDate && ValidPass && ValidCpass ) {
        let failure = document.getElementById('failure');

        console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        $('#failure').hide();
        $('#success').show();

    }
    else {
        console.log('One of Phone, email or user are not valid. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();
    }



})

