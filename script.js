function validate()
{
  var Subject = document.getElementById("Subject");
  var Email = document.getElementById("email");
  var ID = document.getElementById("ID");
  var URL = document.getElementById("URL");
  var Massage = document.getElementById("massage");

  if(Subject.value.trim()=="" || Email.value.trim() =="" || ID.value.trim()=="" || URL.value.trim()=="" || Massage.value.trim()==""){
    sweetAlert("Oops...", "showing exactly which fields are empty.", "error"); 
    return false;
  }
 
  else {
    sendEmail();
return true;
  }
  
}
function onlyalphabate()
{ 
  var regexp = /^[a-zA-Z]*$/; 
  if(Subject.value.match(regexp))
   { 
    return true; }
   else{ 
     alert("the input of subject  dont support numbers");
      
       return false; }
   }

   function onlymessage()
{ 
  var regexp = /^[a-zA-Z]*$/; 
  if(Massage.value.match(regexp))
   { 
    return true; }

   else{ 
     alert("the input of message dont support numbers");
      
       return false; }
   }
   
   function onlynumber()
   { 
     var regexp = /^[0-9]*$/; 
     if(ID.value.match(regexp))
      { 
       return true; }
      else{ 
        alert("the input of ID dont support charecter");
         
          return false; }
      }
      
    /*function mail1()
      {
        var emailvalid = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i ;
         if(Email.value.match(emailvalid)) 
         { 
  
           return true;
           }
           else{ 
             
             alert("the email is miss @ ... or another problem");
            
               return false; }
             
            

      }
      */
     function mail()
     {
        
       var email = document.getElementById("Email").value;
       
        var URL = document.getElementById("URL").value;
        
       
       if(email != ""){
       var x = email;
      var start = email.indexOf("@");
      var y = "";
      for(var i = start + 1; i < x.length;i++){
          y+=x[i];
      }
      alert(y);
       }
       if(URL != ""){
      var z = URL;
      var end = URL.indexOf(".");
      var a = "";
      for(var i = 0; i < end;i++){
          a+=z[i];
      }
      alert(a);
    }
     
     
     
     }
   function myfunction()
   {
     mail();
   onlyalphabate();
   onlynumber();
   onlymessage();
   
   validate();
   
   
   
   }
