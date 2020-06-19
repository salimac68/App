function validate(){
    let e = document.getElementById("email").value;
    let w = document.getElementById("password").value;
    
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let pass=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    
    var i=regexp.test(e);
    var s=pass.test(w);
    
    if(e==""||w==""){   
        alert("field cannot be empty");
        return false;
        }
    else if(i==false){
        alert("enter valid address");
        return false;
        }
    else if(s==false){
        alert("enter valid password");
        return false;
        }
    else{
        return true;
        }
    }