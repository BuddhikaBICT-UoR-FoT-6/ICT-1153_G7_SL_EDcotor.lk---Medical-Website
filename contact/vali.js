function validateAllFields(){
  return validateForm() && emailvalidate() && validatePhoneNumber();
}

function validateForm (){

    var letter= "[A-Za-z\s]+";
    var name=document.getElementById("nameid").value;
    var email=document.getElementById("emailid").value;
    var number=document.getElementById("number").value;
    if((name== null || name=="")||(email==null || email=="") ||(number==null || number=="")) {
        console.error("All fields must be filled out");
        return false;
    }
    else if (name.match(letter)){
        return true;
    }
    else{

        console.error("Name can contain characters only");
        return false;
    }
}
function emailvalidate(){
    var email=document.getElementById("emailid").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email== null || email==""){
        console.error("Email should be filled out");
        return false;
    }
    else if(!emailPattern.test(email)){
        console.error("Please enter a valid email address");
        return false;
    }
    else{
        return true; 
    }
}
function validatePhoneNumber(){
    var number=document.getElementById("number").value;
    if(number.match(/^[0-9]+$/)){
        return true;
    }
    else{
        console.error("Phone number should only be numbers");
        return false;
    }
}

