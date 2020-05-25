
const submit = document.getElementById('submit');
const validation = () => {
    const name = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    const prePass = document.getElementById('pre-pass').value;
    const mail = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const check = document.getElementById('check');
    const err = document.getElementById('err-mess') ;
        
        if(name == "" || pass == "" || mail == "" || phone == "" ){
            err.style.display = "block";
            err.innerHTML = 'Please enter enough information !';
            return false;
                
        }; 
        if(pass != prePass){
            err.style.display = "block";
            err.innerHTML = 'Password do not match';
            return false;
                   
        }
        if (mail.indexOf('@') == -1){
            err.style.display = "block";
            err.innerHTML = 'The email is in the wrong format !!';
            return false;
        }
        if(isNaN(phone) && phone.lenght != 10){
            err.style.display = "block";
            err.innerHTML = 'The phone number is in the wrong format !!';
            return false;
        }
        if (check.checked == false){
            err.style.display = "block";
            err.innerHTML = 'You must agree to the term and conditions';
            return false;
        }
        
        else {
            alert('Success !!!!');
        }
}
submit.addEventListener('click', validation);
