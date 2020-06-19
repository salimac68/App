function validate(){
    let n = document.getElementById("name").value;
    let v = document.getElementById("address").value;
    let q = document.getElementById("gender").value;
    let z = document.getElementById("DOB").value;
    let e = document.getElementById("email").value;
    let p = document.getElementById("phone_number").value;
    let w = document.getElementById("password").value;
    let c = document.getElementById("cp").value;
    
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let pass=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    let phno=/^([0-9]{3,3})([0-9]{3,3})([0-9]{4,4})$/;
    var pn=phno.test(p);
    var i=regexp.test(e);
    var s=pass.test(w);
    
        if(n==""||v==""||q==""||z==""||e==""||p==""||w==""||c==""){
            alert("field cannot be empty");
            return false;
        }
        else if(n.length<=4||n.length>14){
            alert("check the name");
            return false;
        }
        else if(p.length!=10){
            alert("insert valid contact number");
            return false;
        }
        else if(c!=w){
            alert("password doesnot match");
            return false;
        }
        else if(i==false){
            alert("enter valid address");
            return false;
        }
        else if(pn==false){
            alert("check your number");
            return false;
        }
        else if(s==false){
            alert("pass word is too weak ");
            return false;
        }
        else if(s==true){
            if(w.length>12){
                alert("strong password");
            }
            else{
                alert("password strength is medium");
            }
        }
        else{
            return true;
        }
    }
    