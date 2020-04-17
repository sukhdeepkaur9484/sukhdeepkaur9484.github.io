function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }
    return true;
}
function validateTextArea(myform){
    if(myform.delivery.value.trim().length==0){
        errors.innerHTML+=<p>* No input!</p>;
        myform.comments.value="";
        myform.comments.focus();
        return false;
    }
    return true;
}
