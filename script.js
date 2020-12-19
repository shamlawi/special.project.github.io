function validate()
{
 
  var Subject = document.getElementById("Subject").value;
  var ID = document.getElementById("ID").value;
  var Email = document.getElementById("Email").value;
  var URL = document.getElementById("URL").value;
  var Massage = document.getElementById("Massage").value;

  if(Subject.length == 0 || ID.length == 0 || Email.length == 0 || URL.length == 0 || Massage.length == 0)
  sweetAlert("Oops...", "showing exactly which fields are empty.", "error"); 
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
      
    
    function mail11()
      {
        var emailvalid = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i ;
         if(Email.value.match(emailvalid)) 
         { 
          mail();
           return true;
           }
           else{ 
             
             alert("the email is miss @ ... or another problem");
            
               return false; }
               
             
            

      }
      
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
   onlyalphabate();
   onlynumber();
   onlymessage();
   mail11();

   validate();
   
   
   
   }
