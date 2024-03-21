function handleSubmit(){
    const message=document.getElementById("message")
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const Message=document.getElementById("Textarea").value;
    message.style.display="none";

    if (name.length === 0 || name.length > 50 || !/^[a-zA-Z\s'-]+$/.test(name)){
        message.innerText="Please enter the valid Name";
        message.style.display="block";
        return false;
    }
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)==false){
        message.innerText="Please enter the valid Email";
        message.style.display="block";
        return false;
    }
    if(Message.length==0){
        message.innerText="Please Enter the message";
        message.style.display="block";
        return false;
    }
        alert('sucess');
        return true;
    
  

    
   
}